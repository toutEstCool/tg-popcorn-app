import { useNavigate } from "react-router-dom";
import s from "./HeaderWithBackButton.module.css";
import { ChevronLeft } from "lucide-react";
import classNames from "classnames";

type HeaderWithBackButtonProps = {
  title?: string;
  onClick?: () => void;
  titleColor?: string;
  className?: string;
};

export const HeaderWithBackButton = ({
  title,
  onClick,
  titleColor,
  className,
}: HeaderWithBackButtonProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={s.headerContainer}>
      <button
        className={s.backButton}
        onClick={handleBackClick}
        aria-label="Вернуться назад"
      >
        <ChevronLeft width={33} height={33} color="white" />
      </button>
      <h1
        style={{ color: titleColor }}
        className={classNames(s.title, className)}
      >
        {title}
      </h1>
    </header>
  );
};
