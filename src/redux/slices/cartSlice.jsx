import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLSCart } from "../../utils/getLSCart";
import { calcTotalPrice, calcTotalCount } from "../../utils/calcTotalPrice";

 


// const { items, totalPrice } = getLSCart();

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemAction: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

       state.totalPrice = calcTotalPrice(state.items);
       state.totalCount = calcTotalCount(state.items);
       
    },
    updateItemAction: (state, action) => {
      const findItem = state.items.find((obj) => 
      obj.id === action.payload.id);

      if (findItem) {
        findItem.type = action.payload.type;
        findItem.size = action.payload.size;
      }
    },
    minusItemAction: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);

    },
    removeItemAction: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
      
    },
    clearItemsAction: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


export const {
  addItemAction,
  updateItemAction,
  removeItemAction,
  clearItemsAction,
  minusItemAction,
} = cartSlice.actions;

export default cartSlice.reducer;
