import { configureStore } from "@reduxjs/toolkit";
import { Patient_reducer } from "./slices/patientes_slices";
import { Nurse_reduser } from "./slices/nurse_slice";
import { Doctor_reducer } from "./slices/doctors_slice";
import { employee_reduser } from "./slices/employee_slice";
import { depart_reducer } from "./slices/depart_slice";
import { appointment_reduser } from "./slices/appointment_slice";
import { Prescription_reducer } from "./slices/Prescription_slice";

export const store = configureStore({
  reducer: {
    patientes: Patient_reducer,
    doctors: Doctor_reducer,
    nurses: Nurse_reduser,
    employee: employee_reduser,
    depart: depart_reducer,
    appointment: appointment_reduser,
    Prescription: Prescription_reducer,
    // admins:,
  },
});
