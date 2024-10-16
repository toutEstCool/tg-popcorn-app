import { Loader as UILoader } from 'lucide-react'
import s from './Loader.module.css'
import classNames from 'classnames'

interface ILoaderProps {
  className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={classNames(s.loaderWrapper, className)}>
      <UILoader className={s.loader} width={50} height={50} color="#DBB157" />
    </div>
  )
}
