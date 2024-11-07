import { createSlice } from "@reduxjs/toolkit";

export const cartSilce = createSlice({
    name: "cart",
    initialState: {
        value: 17
    },
    reducers: {
        increase: (state, data) => {
            console.log(data);
            state.value += data.payload;
        },
        decrease: (state) => {
            state.value -= 1;
        }
    }
});

export const { increase, decrease } = cartSilce.actions;
export default cartSilce.reducer;