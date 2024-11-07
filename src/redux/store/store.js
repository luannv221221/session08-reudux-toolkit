import { configureStore } from "@reduxjs/toolkit";
import cartSilce from "../reducres/cartSilce";
import categorySlice from "../reducres/categorySlice";


export default configureStore({
    reducer: {
        cart: cartSilce,
        category: categorySlice
    }
});
