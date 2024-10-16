import { useNavigate } from 'react-router-dom'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TestFinishPage.module.css'

export const TestFinishPage = () => {
  const navigate = useNavigate()
  const navigateOnTest = () => {
    navigate('/tests')
  }
  return (
    <AppLayout>
      <section className={s.finishWrapper}>
        <h2 className={s.finishTitle}>Грачёв</h2>
        <div className={s.finishResultWrapper}>
          <img
            width={149}
            src="https://s3-alpha-sig.figma.com/img/ba21/a7ed/4835a44bbe3d767e64343e19223ab702?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGlTO0Fs~jtk9ZJ9hxfPGE43PgzciY-iO7O6RSuNLjZL5fJ~9KcZX4CtKUurkMbtwrotL4f53ELMAXOqaYjHRCFgpRim6rNo9kYgzTJa3q2cenK0tpbS0SFSMRearPr8olfqOnnht3Kbean97txczHhIJzd5rdjsXzgszvtMdVIkyhhURJFweFjVMw3SJRvrmv6YU76D2zgiakItzey6qBHKu6MMa7ihjyqWr8esx0CwkQQfngj7wf-m0fl-L6E4J~D0ru6hxdtnAPfuR3xkQEBBo-E17e~pMqWppW40BwAtWkOcDEaZhHIfv9Ib1u44lItqOQzFYjsbhKKyqmPU9A__"
          />
          <div className={s.finishResultDescriptionWrapper}>
            <span className={s.finishResultAchievements}>Название ачивкии</span>
            <span className={s.finishResultCouns}>+2,400 popcorn coin</span>
          </div>
        </div>
        <div className={s.finishBottomWrapper}>
          <span className={s.finishPercent}>Маркетмейкер (26-50%)</span>
          <p className={s.finishDescription}>
            Твоя стратегия сбалансированная, словно у маркетмейкера, который
            должен поддерживать ордербук и уравновешивать цену актива. Благодаря
            балансу между рисков и консервативностью ты способен зарабатывать на
            рынке дольше, чем большинство участников рынка. (Андрей Грачёв/ DWF
            Labs)
          </p>
        </div>
      </section>
      <div className={s.finishBottomActionBtn}>
        <button className={s.linkResult}>Поделиться результатом</button>
        <button className={s.navigateOnTest} onClick={navigateOnTest}>
          Перейти к списку тестов
        </button>
      </div>
    </AppLayout>
  )
}
