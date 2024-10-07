import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_link } from "../../api/api_linkes";
import axios from "axios";

// get_all_doctors

export const get_all_doctors = createAsyncThunk(
  "doctores/get_all_doctors",
  async () => {
    const response = await axios
      .get(`${api_link}/users?type=doctor`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }
);

// get_single_doctor

export const get_single_doctor = createAsyncThunk(
  "doctores/get_single_doctor",
  async (doctor_id) => {
    const response = await axios
      .get(`${api_link}/users/${doctor_id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }
);

// add_doctor

export const add_doctor = createAsyncThunk(
  "doctores/add_doctor",
  async (doctor_data) => {
    const response = await axios
      .post(`${api_link}/users`, doctor_data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }
);

const Doctor_slice = createSlice({
  name: "doctores",
  initialState: {
    allDoctors: [],
    singleDoctor: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_all_doctors.fulfilled, (state, action) => {
        return { ...state, allDoctors: action.payload };
      })
      .addCase(get_all_doctors.rejected, (state, action) => {
        console.error(action.error);
      })
      .addCase(get_single_doctor.fulfilled, (state, action) => {
        return { ...state, singleDoctor: action.payload };
      })
      .addCase(get_single_doctor.rejected, (state, action) => {
        console.error(action.error);
      })
      .addCase(add_doctor.fulfilled, (state, action) => {
        state = { ...state, allDoctors: [...state.allDoctors, action.payload] };
        return state;
      })
      .addCase(add_doctor.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

export const Doctor_reducer = Doctor_slice.reducer;
export default Doctor_slice.actions;
