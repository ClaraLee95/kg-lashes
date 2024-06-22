import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
	name: "cookie",
	initialState: {
		cookieAccepted: false,
	},
	reducers: {
		acceptCookie: (state) => {
			state.cookieAccepted = true;
		},
		declineCookie: (state) => {
			state.cookieAccepted = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { acceptCookie, declineCookie } = cookieSlice.actions;

export default cookieSlice.reducer;
