import { createSlice } from "@reduxjs/toolkit";
import {findDrinksThunk, createDrinksThunk, deleteDrinksThunk} from "../services/drinks-thunks";

const initialState = {
    drinks: [],
    loading: false
}

const drinksSlicer = createSlice({
    name: "completed",
    initialState,
    reducers: {},
    extraReducers: {
        [findDrinksThunk.pending]:
            (state) => {
                state.loading = true
                state.drinks = []
            },
        [findDrinksThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.drinks = payload
            },
        [findDrinksThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteDrinksThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.drinks = state.completed
                    .filter(c => c._id !== payload)
            },
        [createDrinksThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.drinks.push(payload)
            },

    }
});

export default drinksSlicer.reducer;