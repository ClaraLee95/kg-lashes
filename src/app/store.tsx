import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/cookie/cookieSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
});
