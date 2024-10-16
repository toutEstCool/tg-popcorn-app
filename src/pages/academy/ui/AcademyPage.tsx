import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './AcademyPage.module.css'

export const AcademyPage = () => {
  const navigate = useNavigate()

  const navigateOnTest = () => {
    navigate('/tests')
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Обучение" />
      <div className={s.academyWrapper}>
        <section className={s.bigTile}>
          <div className={s.bigTileInfoWrapper}>
            <img
              className={s.absoluteImg}
              width={150}
              src="https://s3-alpha-sig.figma.com/img/80ca/4599/0baba6ad8d812afd822b12a313b2ee42?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=doP2Ogn4GASgjidqkPg0ufafpBO0iRsKyP1cO5y9M9xpX8nfd21S0sfmi48Uk6law-Kap3aoKQQ-3bzyU3FAHdcpl9PGGQAy41kGKRkv7sjMTEYOmlTHmCKyVKENsQs9a0tU-RpAE6NsRGfGPTGoQD1B9eABQlLdBkqevOAFzKZDfL7pK8M4s33ujhquBuFu0kadnN6eNkm3QyHtt3rt6771jF0bOdhhWeX-RogBvVbyTbf5dN2UpfG2gcv2o7rLidB64u6GSWdVRbGdDogf95e8Jl484voWECeC7jy0prDQWYqvYSwgZ~y4VX5C7p1gHI5eiJKaquFhnVeT4D8zRw__"
              alt="Попкорн"
            />
            <span className={s.bitTileTitle}>
              Узнай свои сильные и слабые стороны
            </span>
            <span className={s.bitTileActionText}>Пройти тестирование</span>
          </div>
          <div>
            <button className={s.bitTileActionBtn} onClick={navigateOnTest}>
              Перейти к тестам
            </button>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
