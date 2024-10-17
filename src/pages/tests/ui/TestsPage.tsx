import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TestsPage.module.css'
import { useFetchTestsList } from '../../../entities/test'
import { Loader } from '../../../shared/ui/Loader'

export const TestsPage = () => {
  const navigate = useNavigate()
  const { testList, testError, testIsLoading } = useFetchTestsList({
    skip: 0,
    take: 10
  })

  const handleTestButtonClick = (testId: string) => {
    navigate(`/test-first-step/${testId}`)
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Тесты" />
      <section className={s.testsWrapper}>
        {testIsLoading ? (
          <div className={s.loader}>
            <Loader />
          </div>
        ) : testError ? (
          <div>Ошибка: {testError}</div>
        ) : testList.length === 0 ? (
          <div>Тесты не найдены</div>
        ) : (
          testList.map((test) => (
            <div key={test.testId} className={s.testWrapper}>
              {test?.previewImageUrl && (
                <img
                  className={s.previewTestImg}
                  width={150}
                  src={test.previewImageUrl}
                  alt="Тест превью"
                />
              )}
              <div className={s.testInfoWrapper}>
                <span className={s.testTitle}>{test.title}</span>
                <span className={s.testSubtitle}>{test.description}</span>
                <span className={s.testReward}>
                  +{test.scoreForAttempt} POPCOIN
                </span>
              </div>
              <button
                className={s.testActionBtn}
                onClick={() => handleTestButtonClick(test.testId)}
              >
                Пройти тест
              </button>
            </div>
          ))
        )}
      </section>
    </AppLayout>
  )
}
