import { configureStore } from "@reduxjs/toolkit";
import cartSilce from "../reducres/cartSilce";

export default configureStore({
    reducer: {
        cart: cartSilce
    }
});
