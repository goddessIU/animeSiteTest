import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { fetchRecommendations } from "./recommendationsAPI"

type dataState = {
    "mal_id": string
    entry: any[]
    content: string
    user: object
}

export interface recommendationsState {
    data: dataState[],
    pagination: {
        "last_visible_page": number
        "has_next_page": boolean
    },
    status: 'success' | 'failed' | 'pending'
}


const initialState: recommendationsState = {
    status: 'pending',
    data: [],
    pagination: {
        last_visible_page: 0,
        has_next_page: false
    }
}

export const getAllRecommendationsAsync = createAsyncThunk('recommendations/getAllRecommendations', async () => {
    const response = await fetchRecommendations()
    if (response.status === 200) {
        return response.data
    } else if (response.status === 400) {
        return ;
    }
    
})

export const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRecommendationsAsync.fulfilled, (state, action: PayloadAction<recommendationsState>) => {
                state.pagination = action.payload.pagination
                state.data = action.payload.data
                state.status = 'success'
            })
            .addCase(getAllRecommendationsAsync.rejected, (state, action) => {
                console.log(action.payload)
            }) 
    }
})

export default recommendationsSlice.reducer

export const selectRecommendations = (state: RootState) => state.recommendations