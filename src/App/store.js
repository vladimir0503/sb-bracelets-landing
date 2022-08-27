import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "../features/catalog/catalogSlice";
import requestBtnReducer from '../features/requestBtn/requestBtnSlice'

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        requestBtn: requestBtnReducer
    }
});