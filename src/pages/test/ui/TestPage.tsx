import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./TestPage.module.css";
import classNames from "classnames";
import { useTestInfo } from "../../../features/test-v2/hooks/useTestInfo";
import { useSubmitTestMutation } from "../../../features/test-v2/hooks/useSubmitTest";
import { Loader } from "../../../shared/ui/Loader";

type SelectedAnswers = {
  [key: number]: number | null;
};

export const TestPage = () => {
  const navigate = useNavigate();
  const { testId } = useParams<{ testId: string }>();
  const parsedTestId = testId ? parseInt(testId, 10) : null;

  const { testInfo, isLoadingTestInfo } = useTestInfo({}) ?? {
    testInfo: undefined,
    isLoadingTestInfo: true,
  };
  const submitTestMutation = useSubmitTestMutation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    if (currentQuestionIndex in selectedAnswers) {
      setSelectedOption(selectedAnswers[currentQuestionIndex]);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestionIndex, selectedAnswers]);

  if (isLoadingTestInfo || !testInfo) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  const currentQuestion = testInfo?.questions?.[currentQuestionIndex] ?? null;

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedOption,
      }));

      if (currentQuestionIndex === testInfo.questions.length - 1) {
        handleSubmitAnswers(selectedAnswers, selectedOption);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      navigate(-1);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmitAnswers = (
    answersSnapshot: SelectedAnswers,
    lastAnswer: number | null,
  ) => {
    if (!parsedTestId) {
      console.error("Test ID отсутствует.");
      return;
    }

    const updatedAnswers = {
      ...answersSnapshot,
      [currentQuestionIndex]: lastAnswer,
    };

    const answers = testInfo.questions.map((_, questionIdx) => {
      const selectedCaseIdx = updatedAnswers[questionIdx];
      const selectedCaseNumber =
        selectedCaseIdx !== undefined && selectedCaseIdx !== null
          ? testInfo.questions[questionIdx]?.testCases[selectedCaseIdx]
              ?.caseNumber
          : null;

      return {
        testQuestionNumber: questionIdx + 1,
        selectedCasesNumbers:
          selectedCaseNumber !== null ? [selectedCaseNumber] : [],
      };
    });

    submitTestMutation.mutate(
      { testId: parsedTestId, answers },
      {
        onSuccess: () => {
          navigate("/test-finish", {
            state: { testId: parsedTestId },
          });
        },
        onError: (error) => {
          console.error("Ошибка при отправке данных теста", error);
        },
      },
    );
  };

  return (
    <AppLayout>
      <HeaderWithBackButton
        onClick={handlePreviousQuestion}
        title={testInfo?.title ?? "Тест"}
      />
      <section className={s.testWrapper}>
        <div className={s.testDescription}>
          <h4 className={s.testCountTitle}>
            Вопрос {currentQuestionIndex + 1}
          </h4>
          <span className={s.testQuestionDescription}>
            {currentQuestion?.question}
          </span>
        </div>
        <ul className={s.testQuestionsWrapper}>
          {currentQuestion?.testCases?.map((testCase, index) => (
            <li key={index} className={s.testQuestionItem}>
              <label className={s.customRadio}>
                <input
                  type="radio"
                  name="option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <span className={s.customRadioCircle}></span>
                <span className={s.questionDescription}>
                  {testCase.description}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className={classNames(s.fixedButton, selectedOption === null && s.bg)}
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          {currentQuestionIndex === testInfo.questions.length - 1
            ? "Завершить тест"
            : "Далее"}
        </button>
      </section>
    </AppLayout>
  );
};
