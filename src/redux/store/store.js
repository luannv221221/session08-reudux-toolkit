import { configureStore } from "@reduxjs/toolkit";
import cartSilce from "../reducres/cartSilce";
import categorySlice from "../reducres/categorySlice";
import productSlice from "../reducres/productSlice";


export default configureStore({
    reducer: {
        cart: cartSilce,
        category: categorySlice,
        product: productSlice
    }
});
