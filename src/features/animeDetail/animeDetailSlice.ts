import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAnimeDetail } from "./animeDetailAPI";

export interface animeDetailState {
    data: any
    status: 'success' | 'fail' | 'pending'
}

const initialState: animeDetailState = {
    data: {},
    status: 'pending'
}

export const getAnimeDetailAsync = createAsyncThunk(
    'animeDetail/getAnimeDetail',
    async (id:number) => {
        const res = await fetchAnimeDetail(id)
        if (res.status === 200) {
            return res.data.data
        }
    }
)

export const animeDetailSlice = createSlice({
    name: 'animeDetail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnimeDetailAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(getAnimeDetailAsync.rejected, (state, action) => {
                state.status = 'fail'
            })
    }
})

export const selectAnimeDetail = (state: RootState) => state.animeDetail.data

export default animeDetailSlice.reducer