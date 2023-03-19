import { createSlice } from "@reduxjs/toolkit";
import bucketListItems from "../data/items.json";

const itemsSlicer = createSlice({
    name: "items",
    initialState: bucketListItems
});

export default itemsSlicer.reducer;