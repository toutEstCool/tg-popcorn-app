import { useParams } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import { parseTextWithLinks } from "../../../shared/utils/parseTextWithLinks";
import s from "./CategoryDetailPage.module.css";

export const categories = [
  {
    id: "1",
    title: "Психология",
    icon: "/path/to/psihology.png",
    description:
      "Скоро здесь появятся уникальные статьи по психологии управления капиталом. Ждите в следующих обновлениях!",
    subtitle:
      "А пока можете изучить лучшие статьи по психологии от основателя Popcorn Capitals в этом посте: https://t.me/Gaaapsby/978.",
    text: "Про психологию мы много говорим в нашем бесплатном комьюнити и обучении от Popcorn Capitals. Чтобы получить доступ нужно быть участником сообщества. Переходи в бот @PopcornCapitalsBot, авторизируйтесь удобным способом и получайте доступ.",
  },
  {
    id: "2",
    title: "Тех.анализ",
    icon: "/path/to/tech-analysis.png",
    description:
      "Скоро в этом разделе появится подборка PDF-файлов на тему технического анализа графика для трейдеров и инвесторов. Ждите в следующих обновлениях!.",
    subtitle:
      "Чтобы не ждать мы подготовили для тебя бесплатные видео-лекции от нашей Академии. В ней ты узнаешь про подводные камни, риски криптовалютного рынка, а также фишки по психологии и техническому анализа для своей прибыльной торговли.",
  },
  {
    id: "3",
    title: "ТОП книг",
    icon: "/path/to/top-books.png",
    description:
      "Скоро в этом разделе появится подборка книг на тему финансовых рынков и психологии управления капиталом. Ждите в следующих обновлениях!",
    subtitle:
      "А пока можете погрузиться в Базу Знаний, где собраны лучшие статьи основателя Popcorn Capitals — https://t.me/Gaaapsby/976",
  },
];

export const CategoryDetailPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const getCategoryById = (categoryId: string) => {
    return categories.find((category) => category.id === categoryId);
  };

  const category = categoryId ? getCategoryById(categoryId) : null;

  return (
    <AppLayout>
      <HeaderWithBackButton title={category?.title} />
      <div className={s.categoryDetailContainer}>
        <h2 className={s.categoryTitle}>
          {category?.description
            ? parseTextWithLinks({
                text: category.description,
                className: s.linkBtn,
              })
            : null}
        </h2>
        <section className={s.mainContentWrapper}>
          <span className={s.categorySubtitle}>
            {category?.subtitle
              ? parseTextWithLinks({
                  text: category.subtitle,
                  className: s.linkBtn,
                })
              : null}
          </span>
          <span className={s.categoryText}>
            {category?.text
              ? parseTextWithLinks({
                  text: category.text,
                  className: s.linkBtn,
                })
              : null}
          </span>
        </section>
      </div>
    </AppLayout>
  );
};
