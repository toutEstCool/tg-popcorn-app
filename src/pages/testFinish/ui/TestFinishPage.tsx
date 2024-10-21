import { useNavigate, useLocation } from "react-router-dom";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./TestFinishPage.module.css";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { useTestInfo } from "../../../features/test-v2/hooks/useTestInfo";

export const TestFinishPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const testId = location.state?.testId;

  const { testInfo } = useTestInfo({ id: testId });

  const navigateOnTest = () => {
    navigate("/tests");
  };

  return (
    <AppLayout>
      <HeaderWithBackButton
        title={testInfo?.title ?? "Тест завершен"}
        titleColor="#DBB157"
      />
      <div className={s.mainImgWrapper}>
        <img
          className={s.mainImg}
          width={150}
          height={150}
          src="https://s3-alpha-sig.figma.com/img/60b9/f905/d6bdda7b8d3d22f88e4255417047b422?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yo~JKTnxgrxX7l-l~0egNnNIAWOpxgw6DjiYdBo7SxIDwZ3Y9oqOUKmj0aYZS~6HKx0N0Az-whdqdzwuC56boNnImGUqL85LiUcdrQ4W0XtgNEXEYF4jj2dhF5J70yZye~iA6MA~Na97pbQuXy6roMkaByn4I2gWlpFODWR7btC0uBdkJH~MGzecHddo0Vfgpoxl-lSlc-PH4Y-c3x-NM0yXXhMq8mrHpFnawGzzssA56r-4vhDlvRKqlDDR-6BOO1XgyGjYdlbUbeTLuz69hPTieDRFSg~epg8yMHgGYwkx0sUbAou6cXS5k20Ek5pTCv49hZGNjbekbBVA-wn5SQ__"
          alt=""
        />
      </div>
      <section className={s.finishWrapper}>
        <div className={s.finishBottomWrapper}>
          <span className={s.finishPercent}>Маркетмейкер</span>
          <p className={s.finishDescription}>
            Твоя стратегия сбалансированная, словно у маркетмейкера, который
            должен поддерживать ордербук и уравновешивать цену актива. Благодаря
            балансу между рисков и консервативностью ты способен зарабатывать на
            рынке дольше, чем большинство участников рынка. (Андрей Грачёв/ DWF
            Labs)
          </p>
        </div>
      </section>
      <div className={s.finishBottomActionBtn}>
        <button className={s.linkResult}>Поделиться результатом</button>
        <button className={s.navigateOnTest} onClick={navigateOnTest}>
          Перейти к списку тестов
        </button>
      </div>
    </AppLayout>
  );
};
