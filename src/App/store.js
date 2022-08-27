import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "../features/catalog/catalogSlice";
import requestBtnReducer from '../features/requestBtn/requestBtnSlice';
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        requestBtn: requestBtnReducer,
        modal: modalReducer
    }
});