// src/services/slices/index.js
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "counter",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export default PersistedReducer;
