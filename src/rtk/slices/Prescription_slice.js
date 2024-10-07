import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_link } from "../../api/api_linkes";
import axios from "axios";
// adding
export const addprescriptions = createAsyncThunk(
  "Prescription_slice/addprescriptions",

  async (prescription_data) => {
    const response = await axios
      .post(`${api_link}/prescriptions`, prescription_data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
    return response;
  }
);

// get all
export const getPrescriptions = createAsyncThunk(
  "Prescription_slice/getPrescriptions",
  async () => {
    const response = await axios
      .get(`${api_link}/prescriptions`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.message;
      });
    return response;
  }
);

const Prescription_slice = createSlice({
  name: "Prescription_slice",
  initialState: {
    prescriptions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all prescriptions
      .addCase(getPrescriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPrescriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.prescriptions = action.payload;
      })
      .addCase(getPrescriptions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // add prescriptions
      .addCase(addprescriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(addprescriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.prescriptions.push(action.payload);
      })
      .addCase(addprescriptions.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const Prescription_reducer = Prescription_slice.reducer;
export default Prescription_slice.actions;
