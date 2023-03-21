import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.allProducts.push(productWithQuantity);
    },



    addQuantity: (state, action) => {
      const choseItem = state.allProducts.find((item) => {
        return item.id === action.payload;
      });

      choseItem.quantity += 1;
    },



    decreaseQuantity: (state, action) => {
      const choseItem = state.allProducts.find((item) => {
        return item.id === action.payload;
      });

      choseItem.quantity -= 1;

      if (choseItem.quantity === 0) {
        const newArray = state.allProducts.filter((item) => {
          return item.quantity !== 0;
        });
        state.allProducts = newArray;
      }
    },




    deleteProduct: (state, action) => {
      const newArray = state.allProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.allProducts = newArray;
    },



  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addQuantity, decreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
