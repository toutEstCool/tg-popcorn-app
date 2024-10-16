import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from '../../../../entities/settings'
import { $api } from '../../../../shared/api/api'
import { authReducer } from '../../../../features/authByInitData'
import { userReducer, usersReducer } from '../../../../entities/user'
import { achievementsReducer } from '../../../../entities/achievements'

const mainReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  achievements: achievementsReducer
})

export const mainStore = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
})

export interface StateSchema {
  auth: ReturnType<typeof authReducer>
  user: ReturnType<typeof userReducer>
  users: ReturnType<typeof usersReducer>
  achievements: ReturnType<typeof achievementsReducer>
  settings: ReturnType<typeof settingsReducer>
}

export type AppDispatch = typeof mainStore.dispatch
export type RootState = ReturnType<typeof mainReducer>
export type AppThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  extra: {
    api: typeof $api
  }
}
