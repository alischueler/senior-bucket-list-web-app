import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./completed-servies"

export const findComepletedThunk = createAsyncThunk(
    'completed/findCompleted', async () =>
        await service.findCompleted()
)

export const deleteCompletedThunk = createAsyncThunk(
    'completed/deleteCompleted',
    async (completedID) => {
        await service.deleteCompleted(completedID)
        return completedID
    })

export const createCompletedThunk = createAsyncThunk(
    'completed/createCompleted',
async (completed) => {
    return await service.createCompleted(completed)
})

