import classNames from 'classnames'
import s from './Button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  onClick: () => void
  className?: string
}

export const Button = ({ text, onClick, className }: IButtonProps) => {
  return (
    <button className={classNames(s.btn, className)} onClick={onClick}>
      {text}
    </button>
  )
}
