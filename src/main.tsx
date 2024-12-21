import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import reportWebVitals from './reportWebVitals'
import App from './App'

import 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
import 'react-datepicker/dist/react-datepicker.css' // React Datepicker CSS
import 'react-big-calendar/lib/css/react-big-calendar.css' // React Big Calendar CSS

import './styles/scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
