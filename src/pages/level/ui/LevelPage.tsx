import { Link } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import { TopUserIcon } from '../../../widgets/IconsComponents'
import { ChevronRight } from 'lucide-react'
import s from './LevelPage.module.css'
import { UserXPBar } from '../../../shared/ui/UserXPBar'

export const LevelPage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Уровни" />
      <div className={s.topLevelsContainer}>
        <Link
          className={s.topMenuItemLink}
          to={'/top-user'}
          aria-label="Топ пользователей "
        >
          <TopUserIcon />
          <div className={s.infoTitle}>
            <span className={s.title}>Топ пользователей </span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        <UserXPBar className={s.xbBar} />
        <section className={s.levelTable}>
          <h3 className={s.levelTableTitle}>Таблица уровней</h3>
          <ul className={s.levelTableWrapper}>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>1,000.00</span>
              <span className={s.levelTableItemLevel}>LVL 1. Хомяк</span>
            </li>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>6,000.00</span>
              <span className={s.levelTableItemLevel}>
                LVL 3. Крипто-энтузиаст
              </span>
              <span className={s.levelTableItemReward}>
                + Скидка 10% на POPCORN PRO
              </span>
            </li>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>35,000.00</span>
              <span className={s.levelTableItemLevel}>
                LVL 7. Рыночный Спекулянт
              </span>
            </li>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>40,000.00</span>
              <span className={s.levelTableItemLevel}>
                LVL 8. Блокчейн гуру
              </span>
            </li>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>50,000.00</span>
              <span className={s.levelTableItemLevel}>
                LVL 9. Крипто-эксперт
              </span>
              <span className={s.levelTableItemReward}>+ 5,000.00 баллов</span>
            </li>
            <li className={s.levelTableItem}>
              <span className={s.levelTableItemCoinCount}>100,000.00</span>
              <span className={s.levelTableItemLevel}>LVL 10. Кит</span>
              <span className={s.levelTableItemReward}>
                + Личная консультация с Русланом
              </span>
            </li>
          </ul>
        </section>
      </div>
    </AppLayout>
  )
}
