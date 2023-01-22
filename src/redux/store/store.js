import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsReduser from "../slices/products.slice";
import cartReduser from "../slices/cartSlice";
import curentlyProductReduser from "../slices/curentlyProductSlice";

import { categoryApi } from "../slices/categoryApi";

export const store = configureStore({
  reducer: {
    products: productsReduser,
    cart: cartReduser,
    curentlyProduct: curentlyProductReduser,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});

setupListeners(store.dispatch);
