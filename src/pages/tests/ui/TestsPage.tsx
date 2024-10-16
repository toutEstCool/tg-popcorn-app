import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import TestPreviewManPng from '../../../shared/assets/images/group-man.png'
import TestPreviewGirlPng from '../../../shared/assets/images/group-girl.png'
import s from './TestsPage.module.css'

export const TestsPage = () => {
  const navigate = useNavigate()

  const navigateOnTest = () => {
    navigate('/test')
  }
  return (
    <AppLayout>
      <HeaderWithBackButton title="Тесты" />
      <section className={s.testsWrapper}>
        <div className={s.testWrapper}>
          <img
            className={s.previewTestImg}
            width={150}
            src={TestPreviewManPng}
            alt="Тест аватар"
          />
          <div className={s.testInfoWrapper}>
            <span className={s.testTitle}>
              Определи свой тип личности в трейдинге и инвестициях.
            </span>
            <span className={s.testSubtitle}>
              Кто ты: Баффет, Грачёв, Аксельрод или Белфорт?
            </span>
            <span className={s.testReward}>+4 500.00 POPCOIN</span>
          </div>
          <button className={s.testActionBtn} onClick={navigateOnTest}>
            Пройти тест
          </button>
        </div>
        {/*  */}
        <div className={s.testWrapper}>
          <img
            className={s.previewTestImg}
            width={150}
            src={TestPreviewGirlPng}
            alt="Тест аватар"
          />
          <div className={s.testInfoWrapper}>
            <span className={s.testTitle}>
              Тест на совместимость с финансовым рынком.
            </span>
            <span className={s.testSubtitle}>
              Рынок для тебя это любовница, подруга или супруга?
            </span>
            <span className={s.testReward}>+4 500.00 POPCOIN</span>
          </div>
          <button className={s.testActionBtn} onClick={navigateOnTest}>
            Пройти тест
          </button>
        </div>
      </section>
    </AppLayout>
  )
}
