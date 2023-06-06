"use client";

import { createSlice } from "@reduxjs/toolkit";

const getUserTheme = () => {
  if (typeof localStorage !== "undefined") {
    const theme = JSON.parse(localStorage.getItem("theme"));
    return theme;
  }
};

const theme = getUserTheme();

export const themeSlice = createSlice({
  name: "theme",
  initialState: theme ? theme : "light",
  reducers: {
    toggleTheme: (state, action) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", JSON.stringify(action.payload));
        return action.payload;
      } else {
        return state;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
