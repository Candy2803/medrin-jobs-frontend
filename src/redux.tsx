import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./state";
import { api } from "./state/api";

// Persist configuration for the auth slice
const authPersistConfig = {
  key: "auth",
  storage,
};

// Combine reducers with type inference
const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

// Add type annotation to the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

// Create the store with typed middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

// Infer the dispatch type from the store
export type AppDispatch = typeof store.dispatch;

// Create the persistor
export const persistor = persistStore(store);
