import { CustomInput } from "../../../shared/ui/CustomInput";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { Tile } from "../../../shared/ui/Tile";
import { AppLayout } from "../../../widgets/AppLayout";
import BooksPng from "../../../shared/assets/images/base-wiki-books.png";
import PsihologyPng from "../../../shared/assets/images/psihology.png";
import TechAnalysisPng from "../../../shared/assets/images/tech-analysis.png";
import BestBooksPng from "../../../shared/assets/images/best-books.png";
import s from "./WikiBasePage.module.css";
import { AppImage } from "../../../shared/ui/AppImg/AppImage";

export const WikiBasePage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="База знаний" />
      <div className={s.wikiBaseContainer}>
        <div className={s.contentWrapper}>
          <h3 className={s.title}>База знаний</h3>
          <p className={s.subtitle}>Максимально полезная информация</p>
        </div>
        <div className={s.iconWrapper}>
          <AppImage className={s.referralIcon} src={BooksPng} alt="Wiki Base" />
        </div>
      </div>
      <div className={s.wikiActionWrapper}>
        <CustomInput />
        <button className={s.wikiBaseActionBtn}>Отправить ссылку</button>
        <section className={s.tileWrapper}>
          <Tile>
            <span className={s.tileTitle}>Психология</span>
            <AppImage width={92} src={PsihologyPng} />
          </Tile>
          <Tile>
            <span className={s.tileTitle}>Тех.анализ</span>
            <AppImage width={92} src={TechAnalysisPng} />
          </Tile>
          <Tile>
            <span className={s.tileTitle}>ТОП книг</span>
            <AppImage width={92} src={BestBooksPng} />
          </Tile>
        </section>
      </div>
    </AppLayout>
  );
};
