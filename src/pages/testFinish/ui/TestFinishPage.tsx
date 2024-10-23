import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./TestFinishPage.module.css";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { useAchievementsDetails } from "../../../features/achievements/model/hooks/useAchievementsDetails";
import { AppImage } from "../../../shared/ui/AppImg/AppImage";
import { Loader } from "../../../shared/ui/Loader";

export const TestFinishPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { achievementId } = location.state || {};
  const [scrollY, setScrollY] = useState(0);

  const { achievementDetails, isLoadingAchievementDetails } =
    useAchievementsDetails({ achievementId });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageScale = Math.max(0, 1 - scrollY / 300);

  const navigateOnTest = () => {
    navigate("/tests");
  };

  if (isLoadingAchievementDetails) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  if (!achievementId) {
    return (
      <AppLayout>
        <HeaderWithBackButton
          title={"Тест на тип личности"}
          titleColor="#DBB157"
        />
        <div className={s.finishWrapper}>
          <p>Достижение не найдено</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton
        title={"Тест на тип личности"}
        titleColor="#DBB157"
      />
      <div className={s.mainImgWrapper}>
        <AppImage
          className={s.mainImg}
          style={{
            transform: `scale(${imageScale})`,
            opacity: imageScale,
          }}
          width={150}
          height={150}
          src={achievementDetails?.imageUrl ?? undefined}
          alt="Achievement Details"
        />
      </div>
      <section className={s.finishWrapper}>
        <div className={s.finishBottomWrapper}>
          <span className={s.resultInfo}>На рынке ты работаешь в стиле</span>
          <span className={s.finishPercent}>{achievementDetails?.nameRu}</span>
          <div className={s.finishDescriptionWrapper}>
            <p className={s.finishDescription}>
              {achievementDetails?.descriptionRu}
            </p>
          </div>
        </div>
      </section>
      <div className={s.finishBottomActionBtn}>
        <button className={s.linkResult}>Поделиться результатом</button>
        <button className={s.navigateOnTest} onClick={navigateOnTest}>
          Перейти к списку тестов
        </button>
      </div>
    </AppLayout>
  );
};
