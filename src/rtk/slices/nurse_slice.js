import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../api/api_linkes";
import { toast } from "react-toastify";

// add_nurse

export const add_nurse = createAsyncThunk(
  "Nurse_slice/add_nurse",
  async (nurse_data) => {
    const response = await axios
      .post(`${api_link}/users`, nurse_data)
      .then((response) => {
        toast.success("Nurse added successfully 👩‍⚕️");
        return response.data;
      })
      .catch((err) => {
        toast.error(err.message);
      });
    return response;
  }
);
// get all nurses
export const get_all_nurses = createAsyncThunk(
  "Nurse_slice/get_all_nurses",
  async () => {
    const respons = await axios
      .get(`${api_link}/users?type=nurse`)
      .then((respons) => {
        return respons.data;
      })
      .catch((err) => {
        toast.error(err.message);
      });
    return respons;
  }
);

const Nurse_slice = createSlice({
  name: "Nurse_slice",
  initialState: {
    allnurses: [],
    singlenurse: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all nurses
      .addCase(get_all_nurses.fulfilled, (state, action) => {
        state.allnurses = action.payload;
        return state;
      })
      // get single nurse
      .addCase(get_all_nurses.rejected, (state, action) => {
        toast.error(action.error.message);
        return state;
      })
      .addCase(add_nurse.fulfilled, (state, action) => {
        state.allnurses = [...state.allnurses, action.payload];
        return state;
      })
      .addCase(add_nurse.rejected, (state, action) => {
        toast.error(action.error.message);
        return state;
      });
  },
});
export const Nurse_reduser = Nurse_slice.reducer;

export default Nurse_slice.action;
