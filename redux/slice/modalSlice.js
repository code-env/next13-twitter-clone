"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  default: false,
  type: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.default = true;
      state.type = action.payload;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
