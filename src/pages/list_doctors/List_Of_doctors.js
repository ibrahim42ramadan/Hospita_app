import React, { useEffect, useState } from "react";
import "./style.css";
import DepartmentCard from "../../components/DepartmentC/DepartmentCard ";
import { useDispatch, useSelector } from "react-redux";
import { getall_departmentes } from "../../rtk/slices/depart_slice";
import Doctor_item from "../../components/doctor_item/Doctor_item";
import { Link } from "lucide-react";
import { get_all_doctors } from "../../rtk/slices/doctors_slice";
export default function List_Of_doctors() {
  const [department, setdepartment] = useState("Pediatrics");
  const dispatch = useDispatch();
  const doctors = useSelector((state) => {
    const allDoctors = state.doctors.allDoctors;
    const departmentdoctor = allDoctors.filter((doctor) => {
      return doctor.speciality === department;
    });

    return departmentdoctor;
  });
  console.log(doctors);
  console.log(department);

  useEffect(() => {
    dispatch(get_all_doctors());
  }, [department]);
  if (doctors.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className=" h-screen">
        <div className="flex  justify-between p-3">
          <div>
            <h1 className="text-2xl shadow-lg border-b-2  border-blue-400 py-1 ">
              welcome to doctoelist page
            </h1>
          </div>
          <select
            value={department}
            onChange={(event) => {
              setdepartment(event.target.value);
              // dispatch(getall_departmentes(event.target.value));
            }}
            className="w-40"
          >
            <option value="Pediatrics"> الاطفال</option>
            <option value="Dermatology">الجلدية</option>
            <option value="Surgery">الجراحة</option>
            <option value="Psychiatry">النفسي</option>
          </select>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            doctors.map((doctor) => (
              <Doctor_item key={doctor.id} doctor={doctor} />
            ))

            // <DepartmentCard department={department} />
          }
        </div>
      </div>
    </>
  );
}
