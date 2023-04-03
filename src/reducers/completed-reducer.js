import { createSlice } from "@reduxjs/toolkit";
import {createCompletedThunk, deleteCompletedThunk, findComepletedThunk} from "../services/completed-thunks";

const initialState = {
    completed: [],
    loading: false
}

const completedSlicer = createSlice({
    name: "completed",
    initialState,
    reducers: {},
    extraReducers: {
        [findComepletedThunk.pending]:
            (state) => {
                state.loading = true
                state.completed = []
            },
        [findComepletedThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.completed = payload
            },
        [findComepletedThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteCompletedThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.completed = state.completed
                    .filter(c => c._id !== payload)
            },
        [createCompletedThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.completed.push(payload)
            },

    }
});

export default completedSlicer.reducer;