import { configureStore } from "@reduxjs/toolkit";

import {cartReducer} from './slice';
import productReducer from './apislice';

 const store = configureStore({

    reducer: {

        cart: cartReducer,

        productitem: productReducer
    }
});
export default store;