import { Children } from "react";
import SingUp_page from "../../pages/Suingup/suingUp_page";
import Loginpage from "../../pages/Loginpage/Loginpage";
import Dashbord from "../../pages/dashbord/dashbord";
import PatioentTable_Data from "../../components/patioenttable_data/PatioentTable_Data";
import Adding_page from "../../pages/Adding_page/Adding_page";
import Doctor_table_form from "../../components/doctors_taple-fom/Doctor_table_form";
import Nurs_table_data from "../../components/nurs_table_data/Nurs_table_data";
import List_Of_doctors from "../../pages/list_doctors/List_Of_doctors";
import Appointment_page from "../../pages/appointment_page/Appointment_page";
import PatientProfile from "../../pages/PatientProfile/PatientProfile";
import Pationt_profile_card from "../../pages/PatientProfile/patient_profile_componante";
import Root_layout from "../../layout/Root/Roo_layout";
import Homepage from "../../pages/Home/Homepage";
import Appointment from "../../components/appointments_table/appointment";
import MyModal from "../../components/personal_doctor_data/Personal_docroe_data";
import About from "../../pages/about/About";
import ContactUs from "../../pages/contact/contact_page";
import DepartmentDetails from "../../pages/DepartmentDetail/DepartmentDetails ";
import PrescriptionPage from "../../pages/PrescriptionPage/PrescriptionPage";
import PrescriptionForm from "../../components/PrescriptionForm/PrescriptionForm";
import PrescriptionList from "../../pages/PrescriptionList/PrescriptionList";

export const routespeses = [
  // aouthuntcation rout
  { path: "login", element: <Loginpage /> },
  { path: "singup", element: <SingUp_page /> },
  { path: "appointment_page/:id", element: <Appointment_page /> },
  { path: "MyModal", element: <MyModal /> },
  { path: "PrescriptionPage", element: <PrescriptionPage /> },
  { path: "PrescriptionForm/:id", element: <PrescriptionForm /> },

  {
    path: "doctors_list",
    element: <List_Of_doctors />,
    children: [],
  },

  {
    path: "dashboard",
    element: <Dashbord></Dashbord>,
    children: [
      { path: "patients", element: <PatioentTable_Data /> },
      { path: "appointments", element: <h2>appointments</h2> },
      { path: "settings", element: <h2>settings</h2> },
      { path: "adding", element: <Adding_page /> },
      { path: "doctors_data", element: <Doctor_table_form /> },
      { path: "nurse_data", element: <Nurs_table_data /> },
    ],
  },
  // maineLayout
  {
    path: "/",
    element: <Root_layout />,
    errorElement: <h1>error</h1>,
    children: [
      { path: "", element: <Homepage /> },
      { path: "home", element: <Homepage /> },
      {
        path: "PatientProfile",
        element: <PatientProfile />,
        children: [
          { path: "", element: <Pationt_profile_card /> },
          { path: "view_patient_profile", element: <Pationt_profile_card /> },
          { path: "view_doctor_profile", element: <Pationt_profile_card /> },
          { path: "all_prescription", element: <PrescriptionList /> },
          { path: "today_appointments", element: <Appointment /> },
          { path: "all_patient", element: <h1>pationnnnnnnnnnt</h1> },

          {
            path: "edit_patient_profile",
            element: <h2>edit_patient_profile</h2>,
          },
        ],
      },
      { path: "doctors", element: <List_Of_doctors /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "DepartmentDetails/:id", element: <DepartmentDetails /> },
    ],
  },
];
