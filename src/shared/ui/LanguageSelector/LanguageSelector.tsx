import { useState } from "react";
import s from "./LanguageSelector.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const languages = [
  {
    code: "https://i.pinimg.com/564x/22/8f/46/228f462a4a94a9697700d8773e9f1c89.jpg",
    label: "Русский",
    flag: "https://i.pinimg.com/564x/22/8f/46/228f462a4a94a9697700d8773e9f1c89.jpg",
  },
];

type Language = {
  code: string;
  label: string;
  flag: string;
};

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={s.languageSelectorContainer}>
      <button className={s.selectorButton} onClick={toggleDropdown}>
        <div className={s.languageSection}>
          <img
            className={s.flag}
            src={selectedLanguage.flag}
            alt={`${selectedLanguage.label} flag`}
          />
          <span className={s.label}>{selectedLanguage.label}</span>
        </div>
        {isOpen ? (
          <ChevronDown className={s.icon} />
        ) : (
          <ChevronUp className={s.icon} />
        )}
      </button>
      {isOpen && (
        <ul className={s.dropdownList}>
          {languages.map((language) => (
            <li
              key={language.code}
              className={s.dropdownItem}
              onClick={() => handleLanguageChange(language)}
            >
              <img
                className={s.flag}
                src={language.flag}
                alt={`${language.label} flag`}
              />
              <span className={s.label}>{language.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
