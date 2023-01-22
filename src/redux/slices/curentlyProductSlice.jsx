import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  loading: true,
  curentProducts: [],
  status: null,
};

export const curentlyProductFetch = createAsyncThunk(
  "products/curentlyProductFetch",
  async ({id}) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const curentlyProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: {
    // curentlyProductFetch
    [curentlyProductFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [curentlyProductFetch.fulfilled]: (state, action) => {
      state.curentProducts = action.payload;
      state.loading = false;
      state.status = "success";
    },
    [curentlyProductFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const curentlyProductSelector = (state) => state.curentlyProduct

export const {} = curentlyProductSlice.actions;

export default curentlyProductSlice.reducer;