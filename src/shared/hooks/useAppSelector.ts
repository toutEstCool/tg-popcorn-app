import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../../app/providers/store/ui/MainStore'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
