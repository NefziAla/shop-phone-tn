import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    
    products: [],
    qty: 0,
    total: 0,
    carts:[],
  },
  reducers: {
    addProducts: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
        };
      } else {
        state.products.push(action.payload);
        state.qty += 1;
        state.total += action.payload.price * action.payload.qty;
      }
    },

    deleteProducts: (state, action) => {
      state.products.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextProducts = state.products.filter(
            (item) => item._id !== cartItem._id
          );

          state.products = nextProducts;
          state.qty -= 1;
          state.total -= action.payload.price * action.payload.qty;
        }
        return state;
      });
    },
    logoutCart:(state)=>{
        state.products=[];
        state.qty=0;
        state.total=0
      }, 
      
      decreaseCart(state, action) {
        const itemIndex = state.products.findIndex(
          (item) => item._id === action.payload._id
        );
  
        if (state.products[itemIndex].qty > 1) {
          state.products[itemIndex].qty -= 1;
          state.total -= action.payload.price
       
        } else if (state.products[itemIndex].qty === 1) {
          const nextCartItems = state.products.filter(
            (item) => item._id !== action.payload._id
            
          );
  
          state.products = nextCartItems;
          state.qty -= 1;
          state.total -= action.payload.price * action.payload.qty;
  
        
        }
  
      },
      increaseCart(state, action) {
        const itemIndex = state.products.findIndex(
          (item) => item._id === action.payload._id
        );
  
        if (state.products[itemIndex].qty >=1) {
          state.products[itemIndex].qty += 1;
          state.total += action.payload.price
       
        } 
  
      },

     addCartStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
     addCartSuccess: (state, action) => {
        state.isFetching = false;
        state.carts=action.payload;

      },
     addCartFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
  },
});

export const { addProducts, deleteProducts,logoutCart,decreaseCart,increaseCart,addCartStart,addCartSuccess,addCartFailure } = cartSlice.actions;
export default cartSlice.reducer;
