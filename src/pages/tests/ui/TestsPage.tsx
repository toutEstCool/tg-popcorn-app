import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import TestPreviewManPng from '../../../shared/assets/images/group-man.png'
import TestPreviewGirlPng from '../../../shared/assets/images/group-girl.png'
import s from './TestsPage.module.css'

interface TestSchema {
  id: string
  title: string
  description: string
  reward: string
  img: string
}

export const TestsPage = () => {
  const testList: TestSchema[] = [
    {
      id: 'personality',
      title: 'Определи свой тип личности в трейдинге и инвестициях.',
      description: 'Кто ты: Баффет, Грачёв, Аксельрод или Белфорт?',
      reward: '+4 500.00 POPCOIN',
      img: TestPreviewManPng
    },
    {
      id: 'compatibility',
      title: 'Тест на совместимость с финансовым рынком.',
      description: 'Рынок для тебя это любовница, подруга или супруга?',
      reward: '+4 500.00 POPCOIN',
      img: TestPreviewGirlPng
    }
  ]
  const navigate = useNavigate()

  const handleTestButtonClick = (testId: string) => {
    navigate(`/test-first-step/${testId}`)
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Тесты" />
      <section className={s.testsWrapper}>
        {testList?.map((test: TestSchema) => (
          <div key={test?.id} className={s.testWrapper}>
            <img
              className={s.previewTestImg}
              width={150}
              src={test?.img}
              alt="Тест аватар"
            />
            <div className={s.testInfoWrapper}>
              <span className={s.testTitle}>{test?.title}</span>
              <span className={s.testSubtitle}>{test?.description}</span>
              <span className={s.testReward}>{test?.reward}</span>
            </div>
            <button
              className={s.testActionBtn}
              onClick={() => handleTestButtonClick(test.id)}
            >
              Пройти тест
            </button>
          </div>
        ))}
      </section>
    </AppLayout>
  )
}
