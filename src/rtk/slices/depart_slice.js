import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_link } from "../../api/api_linkes";
import axios from "axios";

export const getall_departmentes = createAsyncThunk(
  "depart_slice/getall_departmentes",
  async () => {
    const response = await axios
      .get(`${api_link}/departmentes`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching departments: ", error);
        return null;
      });
    return response;
  }
);
const depart_slice = createSlice({
  name: "depart_slice",
  initialState: {
    departments: [],

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all departmentes
      .addCase(getall_departmentes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getall_departmentes.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getall_departmentes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const depart_reducer = depart_slice.reducer;
export default depart_slice.actions;
