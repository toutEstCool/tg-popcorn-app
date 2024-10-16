import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { LanguageSelector } from '../../../shared/ui/LanguageSelector'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './LanguagePage.module.css'

export const LanguagePage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="Языки" />
      <div className={s.languageWrapper}>
        <div className={s.languageTitleWrapper}>
          <p className={s.languageTitle}>Выберите язык</p>
          <span className={s.languageSubTitle}>Опционально</span>
        </div>
        <LanguageSelector />
      </div>
    </AppLayout>
  )
}
