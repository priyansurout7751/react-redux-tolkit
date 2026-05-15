import { createSlice } from "@reduxjs/toolkit";

// get data from localStorage
const storedCart = localStorage.getItem("cart");

// safe parsing
let parsedCart = [];

try {
    const data = JSON.parse(storedCart);
    console.log(data);

    parsedCart = Array.isArray(data)
        ? data
        : [];
} catch (error) {
    parsedCart = [];
}

const initialState = {
    item: parsedCart,
};

const addtoCart = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addItem: (state, action) => {

            // add item
            state.item.push(action.payload);

            // save to localStorage
            localStorage.setItem(
                "cart",
                JSON.stringify(state.item)
            );
        },

        removeItem: (state, action) => {
            console.log("hello");
            

            const cartdata = state.item.filter(
                (item) =>
                    item.id !== action.payload.id
            );

            state.item = cartdata;

            localStorage.setItem(
                "cart",
                JSON.stringify(cartdata)
            );
        },

        clearItem: (state) => {

            state.item = [];

            localStorage.setItem(
                "cart",
                JSON.stringify([])
            );
        },
    },
});

export const {
    addItem,
    removeItem,
    clearItem,
} = addtoCart.actions;

export const cartReducer =
    addtoCart.reducer;