import { useNavigate } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import PopcornTraning from "../../../shared/assets/images/popcorn-training.png";
import s from "./AcademyPage.module.css";
import { AppImage } from "../../../shared/ui/AppImg/AppImage";

export const AcademyPage = () => {
  const navigate = useNavigate();

  const navigateOnTest = () => {
    navigate("/tests");
  };

  return (
    <AppLayout>
      <HeaderWithBackButton title="Обучение" />
      <div className={s.academyWrapper}>
        <section className={s.bigTile}>
          <div className={s.bigTileInfoWrapper}>
            <AppImage
              className={s.absoluteImg}
              width={150}
              src={PopcornTraning}
              alt="Попкорн"
            />
            <span className={s.bitTileTitle}>
              Узнай свои сильные и слабые стороны
            </span>
            <span className={s.bitTileActionText}>Пройти тестирование</span>
          </div>
          <div>
            <button className={s.bitTileActionBtn} onClick={navigateOnTest}>
              Перейти к тестам
            </button>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};
