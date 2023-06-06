"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/themeSlice";
import modalSlice from "./slice/modalSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    modal: modalSlice,
  },
});
