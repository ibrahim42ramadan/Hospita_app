import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UserProfileDialog from "../modal/Modal";
export default function Personal_docroe_data({ doctor }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <tr
      onClick={() => {
        setIsOpen(true);
      }}
      className="border-b hover:bg-gray-200 transition-colors shadow-lg    shadow-blue-200"
    >
      <td className="p-4 text-center w-1/12">{doctor.id}</td>
      <td className="p-4 text-center w-1/12">
        <img
          src={doctor.img}
          alt={`${doctor.name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="p-4 text-center w-1/12">{doctor.name}</td>
      <td className="p-4 text-center Specialization w-1/12">
        {doctor.speciality}
      </td>
      <td className="p-4 text-center w-1/12">{doctor.experience}</td>
      <td className="p-4 text-center w-1/12">{doctor.email}</td>
      <td className="p-4 text-center w-1/12">{doctor.phone}</td>
      <td className="p-4 text-center w-1/12 rol font-normal">{doctor.role}</td>
      <td className="p-4 text-center w-1/12 type font-normal">{doctor.type}</td>
      <td className="p-4 text-center w-1/12">
        <div className="flex gap-1">
          <button
            className="bg-red-500 text-white border-lg rounded-lg p-1  shadow-lg shadow-green-500/50"
            onClick={() => {
              // dispatch(delete_doctor(doctor.id));
              // dispatch(get_all_doctores());
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
          <button
            className="border-lg rounded-lg p-1 bg-blue-500 shadow-lg shadow-blue-500/50 text-white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {" "}
            ....
          </button>
          <UserProfileDialog
            userData={doctor}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      </td>
    </tr>
  );
}
