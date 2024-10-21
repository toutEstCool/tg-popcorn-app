import { useNavigate } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./TestsPage.module.css";
import { Loader } from "../../../shared/ui/Loader";
import { RewardDisplay } from "../../../shared/ui/RewardDisplay";
import { useTestList } from "../../../features/test-v2/hooks/useTestsList";
import { AppImage } from "../../../shared/ui/AppImg/AppImage";

export const TestsPage = () => {
  const navigate = useNavigate();
  const { tests, isLoadingTestsList } = useTestList({ skip: 0, take: 10 });

  const handleTestButtonClick = (testId: string) => {
    navigate(`/test-first-step/${testId}`);
  };

  if (isLoadingTestsList) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Тесты" />
      <section className={s.testsWrapper}>
        {tests &&
          tests.map((test) => (
            <div key={test.testId} className={s.testWrapper}>
              <AppImage
                className={s.previewTestImg}
                width={150}
                src={test.previewImageUrl ?? undefined}
                alt="Тест превью"
              />
              <div className={s.testInfoWrapper}>
                <span className={s.testTitle}>{test.title}</span>
                <span className={s.testSubtitle}>{test.description}</span>
                <span className={s.testReward}>
                  +<RewardDisplay reward={test.scoreForAttempt} /> $corncoin
                </span>
              </div>
              <button
                className={s.testActionBtn}
                onClick={() => handleTestButtonClick(String(test.testId))}
              >
                Пройти тест
              </button>
            </div>
          ))}
      </section>
    </AppLayout>
  );
};
