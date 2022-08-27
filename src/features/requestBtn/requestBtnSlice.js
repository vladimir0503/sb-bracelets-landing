import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: true
};

const requestBtnSlice = createSlice({
    name: 'requestBtn',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.isActive = action.payload
        },
    },
});

export const { toggle } = requestBtnSlice.actions;

export default requestBtnSlice.reducer;