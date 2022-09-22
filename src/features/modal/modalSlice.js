import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
    message: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isActive = true;
            state.message = action.payload
        },
        hideModal: state => {
            state.isActive = false;
            state.message = ''
        }
    }
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;