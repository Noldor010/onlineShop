import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  status: null,
  totalPages: 0,
  currentPage: 1,
  skipPage: 0,
  fetchCarently: 'getAll',
  CurentlyCarently: ''
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async ({skip}) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products?limit=4&skip=${skip}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const categoryFetch = createAsyncThunk(
  "category/productsFetch",
  async ({category, skip}) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=4&skip=${skip}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchFetch = createAsyncThunk(
  "search/productsFetch",
  async ({search, skip}) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${search}&limit=4&skip=${skip}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPageAction: (state, action) => {
      // state.categoryId = Number(action.payload.categoryId);
      const page = action.payload.currentPage
      state.currentPage = page;
      state.skipPage = page*4-4
      // state.sortType = action.payload.sortType;
    },
    fetchCarentlyAction: (state, action) => {
      // state.categoryId = Number(action.payload.categoryId);
      state.fetchCarently = action.payload.fetchCarently
      state.CurentlyCarently = action.payload.CurentlyCarently
      console.log(action.payload.CurentlyCarently)
      // state.sortType = action.payload.sortType;
    },
    setSort: (state, action) => {
      state.products = state.products.sort((a, b) => (a.rating > b.rating) ? -1 : 1)

 
      // 
    },

  },
  extraReducers: {
    // productsFetch
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
      state.status = "success";
      state.totalPages = +Math.ceil(action.payload.total / 4);
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    // categoryFetch
    [categoryFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [categoryFetch.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
      state.status = "success";
      state.totalPages = +Math.ceil(action.payload.total / 4)
    },
    [categoryFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    // searchFetch
    [searchFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [searchFetch.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
      state.status = "success";
      state.totalPages = +Math.ceil(action.payload.total / 4);
    },
    [searchFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});


export const { setPageAction, fetchCarentlyAction, setSort} = productsSlice.actions;

export default productsSlice.reducer;