import React from "react";
import { useNavigate } from "react-router-dom";

export default function Doctor_item({ doctor }) {
  const navto = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out max-w-xs mx-auto">
      {/* صورة الطبيب */}
      <div className="w-full h-48">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* معلومات الطبيب */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
        <p className="text-gray-600">Experience: {doctor.experience} years</p>
        <p className="text-gray-600 ">Role: {doctor.role}</p>

        {/* زر الحجز */}
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => {
            navto(`/appointment_page/${doctor.id}`);
          }}
        >
          Book an appointment
        </button>
      </div>
    </div>
  );
}
