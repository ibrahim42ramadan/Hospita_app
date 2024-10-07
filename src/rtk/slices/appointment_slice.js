import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_link } from "../../api/api_linkes";
import axios from "axios";
import { toast } from "react-toastify";
// get all appointment
export const get_all_appointments = createAsyncThunk(
  "appointment_slice/get_all_appointments",
  async () => {
    const response = await axios
      .get(`${api_link}/appointments`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        toast.error(error.massege);
      });
    return response;
  }
);
// add appointment

export const add_appointment = createAsyncThunk(
  "appointment_slice/add_appointment",
  async (appointment_data) => {
    const response = await axios
      .post(`${api_link}/appointments`, appointment_data)
      .then((response) => {
        toast.success("Appointment created is  successfully 💹");
        return response.data;
      })
      .catch((error) => {
        toast.error(error.massege);
      });
    return response;
  }
);

const appointment_slice = createSlice({
  name: "appointment_slice",
  initialState: {
    allappointments: [],
    singleappointment: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_all_appointments.fulfilled, (state, action) => {
        return { ...state, allappointments: action.payload };
      })
      .addCase(get_all_appointments.rejected, (state, action) => {
        toast.error(action.error.message);
      })
      .addCase(add_appointment.fulfilled, (state, action) => {
        return {
          ...state,
          allappointments: [...state.allappointments, action.payload],
        };
      })
      .addCase(add_appointment.rejected, (state, action) => {
        toast.error(action.error.message);
      });
  },
});
export const appointment_reduser = appointment_slice.reducer;
export default appointment_slice.actions;
