import React, { useState } from "react";
import Patient_masseg from "../patient_masseg/patient_masseg";
import { useNavigate } from "react-router-dom";

export default function Appointment_item({ apoint }) {
  const navto = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const usermasge = {
    text: apoint.disctiption,
    user: apoint.patient,
  };

  return (
    <>
      <tr
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("parent");
        }}
        className=" bg-white   border-b   "
      >
        <td className="p-4 text-center w-1/12 text-sm md:text-base">
          {apoint.patient.id}
        </td>
        <td className="p-4 text-center w-1/12">
          <img
            src={apoint.patient.img}
            alt={`${apoint.patient.name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover overflow-hidden"
          />
        </td>
        <td className="p-4 text-center w-2/12 text-sm md:text-base">
          {apoint.patient.name}
        </td>
        <td className="p-4 text-center w-2/12 text-sm md:text-base">
          {apoint.patient.phone}
        </td>
        <td className="p-4 text-center w-2/12 text-sm md:text-base">
          {apoint.date}
        </td>
        <td className="p-4 text-center w-2/12">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              className="bg-red-500 text-white border-lg shadow-lg shadow-red-500/50 rounded-lg p-1 text-xs sm:text-sm md:text-base"
              onClick={() => {
                // dispatch(delete_apoint(apoint.id));
                // dispatch(get_all_apointes());
              }}
            >
              Done
            </button>
            <button
              className="border-lg rounded-lg p-1 bg-blue-500 shadow-lg shadow-blue-500/50 text-white text-xs sm:text-sm md:text-base"
              onClick={() => {
                // console.log(apoint.patient.id);
                navto(`/PrescriptionForm/${apoint.patient.id}`);
              }}
            >
              write
            </button>
            <Patient_masseg
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              userData={usermasge}
            />
          </div>
        </td>
      </tr>
    </>
  );
}
