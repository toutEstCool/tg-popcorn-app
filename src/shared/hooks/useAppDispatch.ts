import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/providers/store/ui/MainStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
