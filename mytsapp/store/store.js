import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import updateReducer from "./profileSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "update"],
};
const rootReducer = combineReducers({
  login: loginReducer,
  update: updateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
