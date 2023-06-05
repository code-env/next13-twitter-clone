"use client"

import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slice/themeSlice"


export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})