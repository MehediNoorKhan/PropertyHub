import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "@/store/slices/auth.slices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Add slice names you want to persist
};

const rootReducer = combineReducers({
  auth: authSlice,
  // Add more reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default persistedReducer;
