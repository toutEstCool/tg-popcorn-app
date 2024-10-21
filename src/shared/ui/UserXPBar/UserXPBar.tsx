import { memo } from "react";
import s from "./UserXPBar.module.css";
import classNames from "classnames";

interface IUserXPBarProps {
  className?: string;
  score?: number;
  end?: number;
  gradeInfo?: {
    grade: string;
    level: number;
    progressPercents: number;
    scoreFromInclusive: number;
    scoreToExclusive: number;
  };
  isProfile?: boolean;
}

export const UserXPBar = memo(
  ({
    className,
    score = 0,
    gradeInfo,
    end,
    isProfile = true,
  }: IUserXPBarProps) => {
    return (
      <div className={classNames(s.UserXPBarWrapper, className)}>
        <span className={s.userLvl}>
          {isProfile ? (
            <>
              LVL {gradeInfo?.level}. {gradeInfo?.grade}
            </>
          ) : (
            "Приглашений:"
          )}
        </span>
        <div className={s.progressSection}>
          <div className={s.progressCountSection}>
            <span>{score ?? gradeInfo?.scoreFromInclusive}</span>
            {gradeInfo ? (
              <span>$corncoin {gradeInfo?.scoreToExclusive}</span>
            ) : (
              <span>{end}</span>
            )}
          </div>
        </div>
        <div
          style={{
            background: "#FFFFFF1C",
            height: "9px",
            borderRadius: "28px",
          }}
        >
          <div
            style={{
              height: "9px",
              background: "#DBB157",
              width: `${gradeInfo?.progressPercents || score * 10}%`,
              borderRadius: "28px",
            }}
          ></div>
        </div>
      </div>
    );
  },
);
