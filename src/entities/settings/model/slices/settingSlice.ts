import { createSlice } from '@reduxjs/toolkit'
import { TAvailableLanguages } from '../types/setting'

export type TSettingsSliceState = {
  currentLanguage: TAvailableLanguages
}

const getCurrentLang = () => {
  const savedLang = localStorage.getItem('current_language')
  if (savedLang) {
    return savedLang as TAvailableLanguages
  }
  let language = window.navigator.language
  if (language !== 'ru-RU' && language !== 'en-US') {
    language = 'en-US'
  }
  localStorage.setItem('current_language', language)
  return language as TAvailableLanguages
}

const initialState: TSettingsSliceState = {
  currentLanguage: getCurrentLang()
}

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    setActivateSound(_, action) {
      localStorage.setItem('sound_is_activated', String(action.payload))
    },
    changeCurrentLangugage(state, action) {
      state.currentLanguage = action.payload
      localStorage.setItem('current_language', String(action.payload))
    }
  }
})

export const { setActivateSound, changeCurrentLangugage } =
  settingsSlice.actions
export default settingsSlice.reducer
