import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./MenuPage.module.css";
import { ChevronRight } from "lucide-react";
import {
  Levelcon,
  TelegramSupportIcon,
  WikiIcon,
} from "../../../widgets/IconsComponents";
import { Link } from "react-router-dom";

export const MenuPage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Меню" />
      <ul className={s.topSettingsContainer}>
        <li className={s.topSettingsItem}>
          <Link className={s.topMenuItemLink} to={"/level"} aria-label="Уровни">
            <Levelcon />
            <div className={s.infoTitle}>
              <span className={s.title}>Уровни</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
        <li className={s.topSettingsItem}>
          <Link
            className={s.topMenuItemLink}
            to={"/knowledge-base"}
            aria-label="База знаний"
          >
            <WikiIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>База знаний</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
        <li className={s.topSettingsItem}>
          <a
            className={s.topMenuItemLink}
            href="https://t.me/RiskProfit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="тг поддержка"
          >
            <TelegramSupportIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>тг поддержка</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </a>
        </li>
      </ul>
    </AppLayout>
  );
};
