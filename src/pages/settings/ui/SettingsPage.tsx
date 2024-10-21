import { Link } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./SettingsPage.module.css";
import { ChevronRight } from "lucide-react";
import {
  ContactsIcon,
  EmailIcon,
  LanguageIcon,
  MenualIcon,
  TelegramSupportIcon,
} from "../../../widgets/IconsComponents";

export const SettingsPage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Настройки" />
      <ul className={s.topSettingsContainer}>
        <li className={s.topSettingsItem}>
          <Link
            className={s.topSettingsItemLink}
            to={"/language"}
            aria-label="Язык"
          >
            <LanguageIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>Язык</span>
              <span className={s.subTitle}>Русский</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
        <li className={s.topSettingsItem}>
          <Link
            className={s.topSettingsItemLink}
            to={"#"}
            aria-label="Инструкция"
          >
            <MenualIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>Инструкция</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
      </ul>
      {/*  */}
      <ul className={s.bottomSettingsContainer}>
        <li className={s.topSettingsItem}>
          <span className={s.titleBottomSection}>Контакты</span>
        </li>
        <li className={s.topSettingsItem}>
          <Link
            className={s.bottomSettingsItemLink}
            to={"#"}
            aria-label="Контакты"
          >
            <ContactsIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>Контакты</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
        <li className={s.topSettingsItem}>
          <a
            className={s.bottomSettingsItemLink}
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
        <li className={s.topSettingsItem}>
          <Link
            className={s.bottomSettingsItemLink}
            to={"#"}
            aria-label="Электронная почта"
          >
            <EmailIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>Электронная почта</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
        <li className={s.topSettingsItem}>
          <Link
            className={s.bottomSettingsItemLink}
            to={"#"}
            aria-label="канал в тг"
          >
            <TelegramSupportIcon />
            <div className={s.infoTitle}>
              <span className={s.title}>канал в тг</span>
            </div>
            <ChevronRight color="#7C7C7C" />
          </Link>
        </li>
      </ul>
    </AppLayout>
  );
};
