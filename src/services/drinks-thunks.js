import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./drinks-servies"

export const findDrinksThunk = createAsyncThunk(
    'drink/findDrink', async () =>
        await service.findDrinks()
)

export const deleteDrinksThunk = createAsyncThunk(
    'drink/deleteDrink',
    async (drinkID) => {
        await service.deleteDrinks(drinkID)
        return drinkID
    })

export const createDrinksThunk = createAsyncThunk(
    'drink/createDrink',
async (drink) => {
    return await service.createDrinks(drink)
})

