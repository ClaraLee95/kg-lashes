import { configureStore } from "@reduxjs/toolkit";
import cookieReducer from "../utils/cookie/cookieSlice";

export default configureStore({
	reducer: {
		cookie: cookieReducer,
	},
});
