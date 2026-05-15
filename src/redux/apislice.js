import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchdata=createAsyncThunk('product',async () =>{
    let res= await fetch('https://dummyjson.com/products');
    let data=await res.json();
        return data.products;
})
const initialState ={
    item:[]
}
const productItem=createSlice({
    name:'productitem',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.fulfilled, (state, action) => {
            state.item = action.payload;
        })
    }
    

})
export default productItem.reducer;

