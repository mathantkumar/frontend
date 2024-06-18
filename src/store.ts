import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: rootReducer,
});

export default store;
