import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wishList: [],
    qty: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.wishList.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.wishList[existingIndex] = {
          ...state.wishList[existingIndex],
        };
      } else {
        state.wishList.push(action.payload);
        state.qty += 1;
      }

      /* localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); */
    },
    deleteProduct: (state, action) => {
      state.wishList.map((wishItem) => {
        if (wishItem._id === action.payload._id) {
          const nextProducts = state.wishList.filter(
            (item) => item._id !== wishItem._id
          );

          state.wishList = nextProducts;
          state.qty -= 1;
        }
        return state;
      });
    },
    logoutWish:(state)=>{
      state.wishList=[];
      state.qty=0;
    }, 
  },
});

export const { addToCart, deleteProduct,logoutWish } = wishSlice.actions;
export default wishSlice.reducer;
