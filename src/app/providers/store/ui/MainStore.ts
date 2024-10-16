import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from '../../../../entities/settings'
import { $api } from '../../../../shared/api/api'
import { authReducer } from '../../../../features/authByInitData'
import {
  userReducer,
  userReferralsReducer,
  usersReducer
} from '../../../../entities/user'
import { achievementsReducer } from '../../../../entities/achievements'
import { gradesReducer } from '../../../../entities/grades'
import { referralReducer } from '../../../../entities/referral'
import { testReducer, testsReducer } from '../../../../entities/test'

const mainReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  grades: gradesReducer,
  achievements: achievementsReducer,
  referral: referralReducer,
  tests: testsReducer,
  test: testReducer,
  userReferrals: userReferralsReducer
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
  grades: ReturnType<typeof gradesReducer>
  referral: ReturnType<typeof referralReducer>
  userReferrals: ReturnType<typeof userReferralsReducer>
  tests: ReturnType<typeof testsReducer>
  test: ReturnType<typeof testReducer>
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
