import { ChevronRight } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";
import s from "./AchievementsHeader.module.css";

export const AchievementsHeader = memo(() => (
  <div className={s.header}>
    <h2 className={s.title}>Достижения</h2>
    <Link to="/achievements" className={s.viewAllLink}>
      <span>Все</span>
      <ChevronRight />
    </Link>
  </div>
));
