import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../features/feedback/feedbackslice";


export const store = configureStore({
  reducer: {
    feedback: feedbackReducer
  }
});
