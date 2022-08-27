import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    productInfo: null
};

export const productSlice = createSlice({
    name: 'productInfo',
    initialState,
    reducers: {
        loadInfo: (state, action) => {
            state.productInfo = action.payload;
        },
    },
});

export const { loadInfo } = productSlice.actions;

export const getProductInfo = (name, id) = async dispatch => {
    const productInfo = await api.fetchProductInfo(name, id);
    dispatch(loadInfo(productInfo));
    return productInfo;
};

export default productSlice.reducer;