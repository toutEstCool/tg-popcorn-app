import { Button } from '../../Button'
import s from './Error.module.css'

interface IErrorProps {
  errorText: string
  onRetry: () => void
  btnText: string
}

export const Error = ({ errorText, onRetry, btnText }: IErrorProps) => {
  return (
    <div className={s.errorWrapper}>
      <p className={s.errorMessage}>Ошибка: {errorText}</p>
      <Button onClick={onRetry} text={btnText} />
    </div>
  )
}
