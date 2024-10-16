import { InputHTMLAttributes } from 'react'
import { SearchIcon } from '../../../../widgets/IconsComponents'
import s from './CustomInput.module.css'

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const CustomInput = ({
  placeholder,
  value,
  type,
  ...otherProps
}: ICustomInputProps) => {
  return (
    <div className={s.customInputWrapper}>
      <SearchIcon />
      <input
        className={s.input}
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
      />
    </div>
  )
}
