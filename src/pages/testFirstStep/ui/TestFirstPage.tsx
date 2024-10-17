import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TestFirstPage.module.css'
import { Button } from '../../../shared/ui/Button'
import { useParams } from 'react-router-dom'
import GroupMansImg from '../../../shared/assets/images/group-man.png'
import GroupGirlsImg from '../../../shared/assets/images/group-girl.png'

const testDetails = {
  personality: {
    title: 'Кто ты?',
    subTitle: 'Определи свой тип личности в трейдинге и инвестициях.',
    description: 'Баффет, Грачёв, Аксельрод или Белфорт?',
    img: GroupMansImg
  },
  compatibility: {
    title: 'Узнай в тесте',
    subTitle: 'Тест на совместимость с финансовым рынком.',
    description: 'Рынок для тебя это любовница, подруга или супруга?',
    img: GroupGirlsImg
  }
}

export const TestFirstPage = () => {
  const { testId } = useParams<{ testId: string }>()

  const testData = testDetails[testId as keyof typeof testDetails]

  return (
    <AppLayout>
      <HeaderWithBackButton />
      <section className={s.wrapper}>
        <div className={s.container}>
          <h4 className={s.title}>{testData?.title}</h4>
          <div className={s.mainSection}>
            <div className={s.ImgWrapper}>
              <img
                src={testData?.img}
                alt="Кто ты ?"
                className={s.characterImage}
              />
            </div>
            <div className={s.titleAndDescriptionWrapper}>
              <div className={s.descriptionContainer}>
                <h5 className={s.subTitle}>{testData.subTitle}</h5>
                <span className={s.description}>{testData.description}</span>
              </div>
              <Button
                className={s.btn}
                text="Приступить"
                onClick={() => console.log()}
              />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
