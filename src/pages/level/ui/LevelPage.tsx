import { Link } from "react-router-dom";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import { TopUserIcon } from "../../../widgets/IconsComponents";
import { ChevronRight } from "lucide-react";
import s from "./LevelPage.module.css";
import { UserXPBar } from "../../../shared/ui/UserXPBar";

import { LevelsTable } from "../../../entities/grades";
import { Loader } from "../../../shared/ui/Loader";
import { useProfile } from "../../../features/user/model/hooks/useProfile";

export const LevelPage = () => {
  const { profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Уровни" />
      <div className={s.topLevelsContainer}>
        <Link
          className={s.topMenuItemLink}
          to={"/top-user"}
          aria-label="Топ пользователей "
        >
          <TopUserIcon />
          <div className={s.infoTitle}>
            <span className={s.title}>Топ пользователей </span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        {profile && (
          <>
            <UserXPBar
              gradeInfo={profile?.gradeInfo}
              className={s.xbBar}
              score={profile?.score}
            />
            <LevelsTable />
          </>
        )}
      </div>
    </AppLayout>
  );
};
