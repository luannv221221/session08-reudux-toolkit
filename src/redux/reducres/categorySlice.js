import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCategoriesThunk = createAsyncThunk("getCategories", async ({ page = 1 } = {}) => {
    const apiURL = `http://localhost:8080/api/v1/categories?page=${page - 1}`;
    const response = await axios.get(apiURL);
    return response.data;
});

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        data: [],
        totalElement: 0,
        pageSize: 0,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getCategoriesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.content;
                state.totalElement = action.payload.totalElements;
                state.pageSize = action.payload.size
            })
            .addCase(getCategoriesThunk.rejected, (state, err) => {
                state.loading = false;
                console.log(err);
            })
    }
});
export default categorySlice.reducer;