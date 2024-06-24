import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
	name: "cookie",
	initialState: {
		cookieAccepted: false,
	},
	reducers: {
		updateCookie: (state, action) => {
			state.cookieAccepted = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateCookie } = cookieSlice.actions;

export default cookieSlice.reducer;
