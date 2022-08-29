import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "../features/catalog/catalogSlice";
import requestBtnReducer from '../features/requestBtn/requestBtnSlice';
import modalReducer from "../features/modal/modalSlice";
import worksReducer from "../features/works/worksSlice";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        works: worksReducer,
        requestBtn: requestBtnReducer,
        modal: modalReducer
    }
});