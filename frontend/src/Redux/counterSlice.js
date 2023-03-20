import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: ["ali"],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const productWithQuantity = { ...action.payload, "quantity":1     }

      state.allProducts.push(productWithQuantity) 

  },


  addQuantity: (state, action) => {

    state.allProducts = action.payload
  },


  decreaseQuantity: (state, action) => {

    state.allProducts = action.payload
  },


  deleteProduct: (state, action) => {

    state.allProducts = action.payload
  },




},






})

// Action creators are generated for each case reducer function
export const { addToCart, addQuantity, decreaseQuantity, deleteProduct } = counterSlice.actions

export default counterSlice.reducer  