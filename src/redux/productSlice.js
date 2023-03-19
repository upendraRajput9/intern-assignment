import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
  search: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  (search) => {
    return axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.products;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export const { search } = productSlice.actions;
export default productSlice.reducer;
