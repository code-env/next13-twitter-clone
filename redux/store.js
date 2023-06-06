"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
