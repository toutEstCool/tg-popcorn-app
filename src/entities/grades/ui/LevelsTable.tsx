import { useGradesList } from "../model/hooks/useGrades";
import s from "./LevelsTable.module.css";

export const LevelsTable = () => {
  const { grades } = useGradesList();

  return (
    <section className={s.levelTable}>
      <h3 className={s.levelTableTitle}>Таблица уровней</h3>
      <ul className={s.levelTableWrapper}>
        {grades.map((grade) => (
          <li key={grade.level} className={s.levelTableItem}>
            <span className={s.levelTableItemCoinCount}>
              {grade.scoreToExclusive.toLocaleString("ru-RU")}.00
            </span>
            <span className={s.levelTableItemLevel}>
              LVL {grade.level}. {grade.grade}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
