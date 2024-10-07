import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../api/api_linkes";
import { toast } from "react-toastify";

// adding a new employee
export const addEmployee = createAsyncThunk(
  "employees_slice/addEmployee",
  async (employee_data) => {
    const response = await axios
      .post(`${api_link}/users`, employee_data)
      .then((response) => {
        toast.success("Employee added successfully!");
        return response.data;
      })
      .catch((error) => {
        toast.error(error.message);
      });
    return response;
  }
);

const employee_slice = createSlice({
  name: "employees_slice",
  initialState: {
    all_employees: [],
    employee: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state, action) => {
        toast.info("Adding employee...");
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        return {
          ...state,
          all_employees: [...state.all_employees, action.payload],
        };
      })
      .addCase(addEmployee.rejected, (state, action) => {
        return [];
      });
  },
});
export const employee_reduser = employee_slice.reducer;

export default employee_slice.actions;
