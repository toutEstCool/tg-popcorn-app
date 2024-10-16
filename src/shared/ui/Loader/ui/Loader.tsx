import { Loader as UILoader } from 'lucide-react'
import s from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <UILoader className={s.loader} width={50} height={50} color="#DBB157" />
    </div>
  )
}
