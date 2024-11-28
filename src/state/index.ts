/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
}

interface User {
	id: string;
	email: string;
	name?: string;
	role: string;
	image: string | null;
	isVerified: boolean;
}

interface SetCredentialsPayload {
	user: User;
	accessToken: string;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (
			state,
			action: PayloadAction<SetCredentialsPayload>
		) => {
			const { user, accessToken, isAuthenticated } = action.payload;
			state.user = user;
			state.token = accessToken;
			state.isAuthenticated = isAuthenticated;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state: { auth: AuthState }) =>
	state.auth.user;
export const selectCurrentToken = (state: { auth: AuthState }) =>
	state.auth.token;
