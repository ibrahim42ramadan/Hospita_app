import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddDoctorForm from "../../components/add_doctor_form/add_doctor_form";
import Add_nurse_Form from "../../components/add_new_nurse/add_aNew_nurse";
import Add_employee_Form from "../../components/add_embloyee/add_a_new_emploeyee";

export default function Adding_page() {
  const [type, settype] = useState("all");
  useEffect(() => {}, [type]);
  const form_Handler = () => {
    if (type === "doctor") {
      return <AddDoctorForm />;
    } else if (type === "nurse") {
      return <Add_nurse_Form />;
    } else if (type === "employee") {
      return <Add_employee_Form />;
    }
  };
  return (
    <>
      <div className="p-3 rounde d-lg m-3 bg-slate-200">
        <div className="flex justify-between">
          {/* select menue */}
          <h1> adding new memeder 👤</h1>
          <div>
            <select
              className="border-blue-300"
              value={type}
              onChange={(event) => {
                settype(event.target.value);
              }}
            >
              <option className="" value="all">
                All Members
              </option>
              <option className="" value="doctor">
                Doctors 👨‍⚕️
              </option>
              <option className="" value="nurse">
                Nurses 👩‍⚕️
              </option>
              <option className="" value="patient">
                Patients 👩‍🎤
              </option>
              <option className="" value="employee">
                employee 👤
              </option>
            </select>
          </div>
          {/* start formes */}
        </div>
        <div>{form_Handler()}</div>
      </div>
    </>
  );
}
