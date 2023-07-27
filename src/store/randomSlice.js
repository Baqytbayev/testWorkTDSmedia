import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {randomApi} from "../api/randomApi";


export const getRandom = createAsyncThunk(
    'random/getRandom',
    async () => {
        return await randomApi.getRandom()
    }
)

export const randomSlice = createSlice({
    name: 'random',
    initialState: {
        random: {
            results: [],
        },
        loading: false
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getRandom.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRandom.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getRandom.fulfilled, (state, action) => {
                state.loading = false;
                state.random = action.payload
            })
    }
})