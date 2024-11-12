import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductSearchThunk = createAsyncThunk("getProducts", async ({ keyword } = {}) => {
    const apiURL = `http://localhost:8080/api/v1/categories?page=${keyword}`;
    const response = await axios.get(apiURL);
    return response.data;
});
const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductSearchThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductSearchThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.content;

            })
            .addCase(getProductSearchThunk.rejected, (state, err) => {
                state.loading = false;
                console.log(err);
            })
    }
});
export default productSlice.reducer;