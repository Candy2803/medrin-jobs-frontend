/** @format */

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
import employerReducer from "./state/employerSlice";

// Persist configuration for the auth slice
const authPersistConfig = {
	key: "auth",
	storage,
};


const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
	employer: employerReducer,

	[api.reducerPath]: api.reducer, 
});


export type RootState = ReturnType<typeof rootReducer>;


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(api.middleware),
});


export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);
