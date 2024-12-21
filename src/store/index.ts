import alertReducer from './alert'
import authReducer from './auth'
import leaveReducer from './leave'
import usersReducer from './users'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  auth: authReducer,
  leave: leaveReducer,
  alert: alertReducer,
  users: usersReducer
})

const PersistedReducer = persistReducer(
  {
    key: 'counter',
    storage
  },
  rootReducer
)

const store = configureStore({
  reducer: PersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export default store

export const persistor = persistStore(store)
export const makeStore = () => {
  return store
}

// Infer the type of makeStore &  Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
