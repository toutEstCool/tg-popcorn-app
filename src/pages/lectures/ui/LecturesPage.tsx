import { Link } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './LecturesPage.module.css'
import { ChevronRight } from 'lucide-react'

export const LecturesPage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Обучение" />
      <div className={s.lecturesWrapper}>
        <Link to={'/lecture'} className={s.lectureItemLinkWrapper}>
          <div className={s.lectureInfoWrapper}>
            <div className={s.lectureImage} />
            <span className={s.lectureTitle}>Лекция 1</span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        <Link to={'/lecture'} className={s.lectureItemLinkWrapper}>
          <div className={s.lectureInfoWrapper}>
            <div className={s.lectureImage} />
            <span className={s.lectureTitle}>Лекция 1</span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        <Link to={'/lecture'} className={s.lectureItemLinkWrapper}>
          <div className={s.lectureInfoWrapper}>
            <div className={s.lectureImage} />
            <span className={s.lectureTitle}>Лекция 1</span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        <Link to={'/lecture'} className={s.lectureItemLinkWrapper}>
          <div className={s.lectureInfoWrapper}>
            <div className={s.lectureImage} />
            <span className={s.lectureTitle}>Лекция 1</span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
      </div>
    </AppLayout>
  )
}
