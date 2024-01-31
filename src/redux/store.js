import { configureStore } from "@reduxjs/toolkit";
import wishList from "./slices/wishList";
import cartSlice from "./slices/cartSlice";


const  store =configureStore({
    reducer:{
        wishlistReducer:wishList, 
        cartReducer: cartSlice  
    }
})
export default store