import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    works: []
};

const worksSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {
        loadWorks: (state, action) => {
            state.works = action.payload;
        },
    }
});

export const { loadWorks } = worksSlice.actions;

export const getWorkItems = () => async dispatch => {
    const works = await api.getWorks();
    dispatch(loadWorks(works));
    return works;
};

export default worksSlice.reducer;