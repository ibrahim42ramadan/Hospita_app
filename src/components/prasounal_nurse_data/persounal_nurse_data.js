import React from "react";

export default function Personal_nurse_data({ nurse }) {
  return (
    <tr className="border-b hover:bg-gray-200 transition-colors shadow-lg    shadow-blue-200">
      <td className="p-4 text-center w-1/12">{nurse.id}</td>
      <td className="p-4 text-center w-1/12">
        <img
          src={nurse.img}
          alt={`${nurse.name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="p-4 text-center w-1/12">{nurse.name}</td>
      <td className="p-4 text-center Specialization w-1/12">
        {nurse.speciality}
      </td>
      <td className="p-4 text-center w-1/12">{nurse.experience}</td>
      <td className="p-4 text-center w-1/12">{nurse.email}</td>
      <td className="p-4 text-center w-1/12">{nurse.phone}</td>
      <td className="p-4 text-center w-1/12 rol font-normal">{nurse.role}</td>
      <td className="p-4 text-center w-1/12 type font-normal">{nurse.type}</td>
      <td className="p-4 text-center w-1/12">
        <div className="flex gap-1">
          <button
            className="bg-red-500 text-white border-lg rounded-lg p-1"
            onClick={() => {
              // dispatch(delete_nurse(nurse.id));
              // dispatch(get_all_nursees());
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
}
