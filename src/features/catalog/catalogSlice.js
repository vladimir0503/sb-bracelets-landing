import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    catalog: [],
    isLoading: false,
    catalogName: 'bracelets'
};

const objToArray = obj => {
    if (obj) {
        return Object.keys(obj).map((key, i) => ({
            id: key,
            ...Object.values(obj)[i],
        }));
    } else {
        return [];
    };
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        loadCatalog: (state, action) => {
            state.catalog = objToArray(action.payload);
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        chooseName: (state, action) => {
            state.catalogName = action.payload;
        }
    },
});

export const { loadCatalog, toggleLoading, chooseName } = catalogSlice.actions;

export const getCatalog = name => async dispatch => {
    dispatch(toggleLoading(true));
    const catalog = await api.getProducts(name);
    dispatch(loadCatalog(catalog));
    dispatch(toggleLoading(false));
    return catalog;
};

export default catalogSlice.reducer;