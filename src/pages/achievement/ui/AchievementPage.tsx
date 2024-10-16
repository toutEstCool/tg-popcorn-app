import { AchievementsList } from '../../../features/achievements'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './AchievemenPage.module.css'

export const AchievementPage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Достижения" />
      <AchievementsList className={s.achivement} />
    </AppLayout>
  )
}
