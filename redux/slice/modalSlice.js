"use client";

import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    toggleModal: (state) => {
      if (state === false) {
        return true;
      } else {
        return false;
      }
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
