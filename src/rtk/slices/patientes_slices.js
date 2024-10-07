import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../api/api_linkes";
import { toast } from "react-toastify";
// add_patient
export const add_patient = createAsyncThunk(
  "patientes_slices/add_patient",
  async (patient_data) => {
    const response = await axios
      .post(`${api_link}/users`, patient_data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return { maseg: err.response.data };
      });
    return response;
  }
);
// logging pation
export const login_patient = createAsyncThunk(
  "patientes_slices/login_patient",
  async (patient_data) => {
    const response = await axios
      .post(`${api_link}/login`, patient_data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.respons.data);
        return { maseg: err.respons.data };
      });
    return response;
  }
);
// delete patient

export const delete_patient = createAsyncThunk(
  "patientes_slices/delete_patient",
  async (patient_id) => {
    const response = await axios
      .delete(`${api_link}/users/${patient_id}`)
      .then((response) => {
        console.log(response.data);

        return response.data;
      })
      .catch((err) => {
        toast.error("Error deleting patient");
        return {};
      });
    return response;
  }
);

// Get singel patient
export const get_singel_patient = createAsyncThunk(
  "patientes_slices/get_singel_patient",
  async (patient_id) => {
    const response = await axios
      .get(`${api_link}/users/${patient_id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error("Error fetching patient");
        return {};
      });
    return response;
  }
);
// Get all patientes
export const get_all_patientes = createAsyncThunk(
  "patientes_slices/get_all_patientes",
  async () => {
    const response = await axios
      .get(`${api_link}/users?type=patient`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error("Error fetching patientes");
        return [];
      });
    return response;
  }
);
const patientes_slices = createSlice({
  name: "patientes",
  initialState: {
    allpatientes: [],
    singelpatient: {},
    login_patient: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all patientes
      .addCase(get_all_patientes.fulfilled, (state, action) => {
        state.allpatientes = action.payload;
        return state;
      })
      .addCase(get_all_patientes.rejected, (state, action) => {
        return [];
      })

      // add patient
      .addCase(add_patient.fulfilled, (state, action) => {
        return state;
      })
      .addCase(add_patient.rejected, (state, action) => {
        return [];
      })
      // delete patient
      .addCase(delete_patient.fulfilled, (state, action) => {
        return state;
      })
      .addCase(delete_patient.rejected, (state, action) => {
        return [];
      })

      // update patient
      //.addCase(update_patient.fulfilled, (state, action) => {
      //   return state;
      // })
      //.addCase(update_patient.rejected, (state, action) => {
      //   return [];
      // })

      // get all patientes
      //.addCase(get_all_patientes.fulfilled, (state, action) => {
      //   state.allpatientes = action.payload;
      // })
      //.addCase(get_all_patientes.rejected, (state, action) => {
      //   return [];
      // })

      // add patient
      //.addCase(add_patient.fulfilled, (state

      // logging pation
      .addCase(login_patient.fulfilled, (state, action) => {
        state.login_patient = action.payload;
      })
      .addCase(login_patient.rejected, (state, action) => {
        return {};
      })
      // get singel patient
      .addCase(get_singel_patient.fulfilled, (state, action) => {
        state.singelpatient = action.payload;
        return state;
      })
      .addCase(get_singel_patient.rejected, (state, action) => {
        return {};
      });
    // update patient
    //.addCase(update_patient.fulfilled, (state, action) => {
    //   return state;
    // })
    //.addCase(update_patient.rejected, (state, action) => {
    //   return [];
    // })
    // get all patientes
  },
});
export const Patient_reducer = patientes_slices.reducer;
export default patientes_slices.actions;
