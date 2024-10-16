import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './LecturePage.module.css'

export const LecturePage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Лекция 1" />
      <div className={s.lectureWrapper}>
        <div className={s.lectureImg} />
        <div className={s.lectureBlockWrapper}>
          <h3 className={s.lectureTitle}>Доп. задания за баллы</h3>
          <span className={s.lectureText}>
            Выполни все и получи баллы Выполни все и получи баллыВыполни все и
            получи баллыВыполни все и получи баллы Выполни все и получи баллы
            Выполни все и получи баллыВыполни все и получи баллыВыполни все и
            получи баллыВыполни все и получи баллы Выполни все и получи
            баллыВыполни все и получи баллыВыполни все и получи баллыВыполни все
            и получи баллы
          </span>
          <span className={s.lectureText}>
            Выполни все и получи баллы Выполни все и получи баллыВыполни все и
            получи баллыВыполни все и получи баллы Выполни все и получи баллы
            Выполни все и получи баллыВыполни все и получи баллыВыполни все и
            получи баллыВыполни все и получи баллы Выполни все и получи
            баллыВыполни все и получи баллыВыполни все и получи баллыВыполни все
            и получи баллы
          </span>
        </div>
      </div>
      <button className={s.fixedButton}>Пройти тест</button>
    </AppLayout>
  )
}
