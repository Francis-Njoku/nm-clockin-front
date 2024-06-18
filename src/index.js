import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./services/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
//import { BrowserRouter } from 'react-router-dom';
import "./assets/scss/main.scss"
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'react-datepicker/dist/react-datepicker.css'; // React Datepicker CSS
import 'react-big-calendar/lib/css/react-big-calendar.css'; // React Big Calendar CSS

let persistor = persistStore(store);

//const root = ReactDOM

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  
