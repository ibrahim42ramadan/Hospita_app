import React from "react";
import { useDispatch } from "react-redux";
import {
  delete_patient,
  get_all_patientes,
} from "../../rtk/slices/patientes_slices";
import "./style.css";

const PatientInfo = ({ patient }) => {
  const dispatch = useDispatch();
  return (
    <tr className="border-b hover:bg-gray-200 transition-colors shadow-lg    shadow-blue-200">
      <td className="p-4 text-center w-1/12">{patient.id}</td>
      <td className="p-4 text-center w-1/12">
        <img
          src={patient.img}
          alt={`${patient.name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="p-4 text-center w-1/12">{patient.name}</td>
      <td className="p-4 text-center w-1/12">{patient.age}</td>
      <td className="p-4 text-center w-1/12">{patient.gender}</td>
      <td className="p-4 text-center w-1/12">{patient.email}</td>
      <td className="p-4 text-center w-1/12">{patient.phone}</td>
      <td className="p-4 text-center w-1/12 rol font-normal">{patient.rol}</td>
      <td className="p-4 text-center w-1/12 type font-normal">
        {patient.type}
      </td>
      <td className="p-4 text-center w-1/12">
        <div className="flex gap-1">
          <button
            className="bg-red-500 text-white border-lg rounded-lg p-1"
            onClick={() => {
              dispatch(delete_patient(patient.id));
              // dispatch(get_all_patientes());
            }}
          >
            delete
          </button>
          <button
            className="border-lg rounded-lg p-1 bg-blue-500 shadow-lg shadow-blue-500/50 text-white"
            onClick={() => {}}
          >
            {" "}
            update
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PatientInfo;
