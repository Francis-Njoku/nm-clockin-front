import { IAlert, alertError, alertSuccess, clear } from '.'
import { useAppDispatch, useAppSelector } from '..'

// interfaces

function useAlertRedux(): IAlertService {
  const dispatch = useAppDispatch()
  const { type, message, showAfterRedirect } = useAppSelector((state) => state.alert)

  return {
    type,
    message,
    showAfterRedirect,
    alertSuccess: (message: string, showAfterRedirect = false) => {
      console.log(message)
      dispatch(alertSuccess({ message, showAfterRedirect }))
      setTimeout(() => {
        dispatch(clear(''))
      }, 5000)
    },
    alertError: (error) => {
      const message = 'Error: ' + typeof error === 'string' ? error : JSON.stringify(error)
      const showAfterRedirect = false
      console.log(error)
      dispatch(alertError({ message, showAfterRedirect }))
      setTimeout(() => {
        dispatch(clear(''))
      }, 5000)
    },
    clear: () => {
      dispatch(clear(''))
    }
  }
}

export { useAlertRedux }

export interface IAlertService extends IAlert {
  alertSuccess: (message: string, showAfterRedirect?: boolean) => void
  alertError: (message: string, showAfterRedirect?: boolean) => void
  clear: () => void
}
