import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { Tile } from "../../../shared/ui/Tile";
import { AppLayout } from "../../../widgets/AppLayout";
import BooksPng from "../../../shared/assets/images/base-wiki-books.png";
import PsihologyPng from "../../../shared/assets/images/psihology.png";
import TechAnalysisPng from "../../../shared/assets/images/tech-analysis.png";
import BestBooksPng from "../../../shared/assets/images/best-books.png";
import s from "./WikiBasePage.module.css";
import { AppImage } from "../../../shared/ui/AppImg/AppImage";
import { InviteFriendButton } from "../../../entities/referral";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "1", title: "Психология", icon: PsihologyPng },
  { id: "2", title: "Тех.анализ", icon: TechAnalysisPng },
  { id: "3", title: "ТОП книг", icon: BestBooksPng },
];

export const WikiBasePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/knowledge-base/${categoryId}`);
  };

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
        <InviteFriendButton
          className={s.wikiBaseActionBtn}
          btnText="Отправить ссылку"
        />
        <section className={s.tileWrapper}>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Tile>
                <span className={s.tileTitle}>{category.title}</span>
                <AppImage width={92} src={category.icon} />
              </Tile>
            </div>
          ))}
        </section>
      </div>
    </AppLayout>
  );
};
