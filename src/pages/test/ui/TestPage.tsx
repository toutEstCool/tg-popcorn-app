import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TestPage.module.css'
import classNames from 'classnames'
import { useFetchTestInfo } from '../../../entities/test'
import { Loader } from '../../../shared/ui/Loader'

type SelectedAnswers = {
  [key: number]: number | null
}

export const TestPage = () => {
  const navigate = useNavigate()
  const { title, questions, isLoading, error } = useFetchTestInfo()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: selectedOption
      })
      setSelectedOption(null)

      if (currentQuestionIndex === questions.length - 1) {
        navigate('/test-finish')
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      navigate(-1)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedOption(selectedAnswers[currentQuestionIndex - 1] ?? null)
    }
  }

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <AppLayout>
      <HeaderWithBackButton onClick={handlePreviousQuestion} title={title} />
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
              <label className={s.testQuestion}>
                <input
                  className={s.inputRadio}
                  type="radio"
                  name="option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <span>{testCase.description}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className={classNames(s.fixedButton, selectedOption === null && s.bg)}
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          {currentQuestionIndex === questions.length - 1
            ? 'Завершить тест'
            : 'Пройти тест'}
        </button>
      </section>
    </AppLayout>
  )
}
