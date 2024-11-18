import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

// src/services/slices/index.js
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import loginReducer from './login'
import registerReducer from './register'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'counter',
  storage
}

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
})

const PersistedReducer = persistReducer(persistConfig, rootReducer)

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

export const makeStore = () => {
  return store
}

// Infer the type of makeStore &  Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
