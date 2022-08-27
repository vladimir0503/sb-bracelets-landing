import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    catalog: []
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
    },
});

export const { loadCatalog } = catalogSlice.actions;

export const getCatalog = name => async dispatch => {
    const catalog = await api.getProducts(name);
    dispatch(loadCatalog(catalog));
    return catalog;
};

export default catalogSlice.reducer;