import { createSlice } from "@reduxjs/toolkit";
import completed from "../data/completed.json";

const completedSlicer = createSlice({
    name: "completed",
    initialState: completed
});

export default completedSlicer.reducer;