import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});
const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // bu http sorgu olmadiqda istifade edirik
  },
  extraReducers: (builder) => {
    // bu Http sorgu olduqda istifade edilir
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
