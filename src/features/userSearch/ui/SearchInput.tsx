import { CustomInput } from '../../../shared/ui/CustomInput'

interface ISearchInputProps {
  value: string
  onChange: (value: string) => void
}

export const SearchInput = ({ value, onChange }: ISearchInputProps) => {
  return (
    <CustomInput
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск"
    />
  )
}
