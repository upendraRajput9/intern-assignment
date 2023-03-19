import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchCarts = createAsyncThunk("carts/fetchCarts", () => {
  return axios.get("https://dummyjson.com/carts").then((res) => res);
});

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCarts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.carts[0];
      state.error = "";
    });
    builder.addCase(fetchCarts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default cartSlice.reducer;
