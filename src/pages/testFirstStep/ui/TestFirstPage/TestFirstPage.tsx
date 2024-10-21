import s from "./TestFirstPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../../../../widgets/AppLayout";
import { HeaderWithBackButton } from "../../../../shared/ui/HeaderWithBackButton";
import { Button } from "../../../../shared/ui/Button";
import { useTestInfo } from "../../../../features/test-v2/hooks/useTestInfo";
import { Loader } from "../../../../shared/ui/Loader";

const testDetails = {
  "1": {
    title: "Кто ты?",
  },
  "2": {
    title: "Узнай в тесте",
  },
};

export const TestFirstPage = () => {
  const navigate = useNavigate();
  const { testInfo, isLoadingTestInfo } = useTestInfo({});
  const { testId } = useParams<{ testId: string }>();

  const testData = testDetails[testId as keyof typeof testDetails];

  const startQuest = () => {
    navigate(`/test-process/${testId}`);
  };

  if (isLoadingTestInfo) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton />
      <section className={s.wrapper}>
        <div className={s.container}>
          <h4 className={s.title}>{testData?.title}</h4>
          <div className={s.mainSection}>
            <div className={s.ImgWrapper}>
              <img
                src={testInfo?.previewImageUrl ?? undefined}
                alt="Кто ты ?"
                className={s.characterImage}
              />
            </div>
            <div className={s.titleAndDescriptionWrapper}>
              <div className={s.descriptionContainer}>
                <h5 className={s.subTitle}>{testInfo?.title}</h5>
                <span className={s.description}>{testInfo?.description}</span>
              </div>
              <Button
                className={s.btn}
                text="Приступить"
                onClick={startQuest}
              />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
