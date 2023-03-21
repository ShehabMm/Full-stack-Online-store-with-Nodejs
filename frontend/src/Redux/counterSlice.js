import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: [],
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

    const choseItem = state.allProducts.find((item) => {
      return item.id === action.payload 
    })


    choseItem.quantity += +1


  },


  decreaseQuantity: (state, action) => {

    const choseItem = state.allProducts.find((item) => {
      return item.id === action.payload 
    })


    choseItem.quantity -= 1




  },


  deleteProduct: (state, action) => {

    state.allProducts = action.payload
  },




},






})

// Action creators are generated for each case reducer function
export const { addToCart, addQuantity, decreaseQuantity, deleteProduct } = counterSlice.actions

export default counterSlice.reducer  