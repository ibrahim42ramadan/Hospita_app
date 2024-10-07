import React from "react";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ depart }) => {
  const navto = useNavigate();
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="thomnaile">
        <img
          src={depart.img}
          alt={depart.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{depart.name}</h2>
        <p className="text-gray-600">{depart.description}</p>
      </div>
      <div className="p-4">
        <button
          onClick={() => {
            navto(`/DepartmentDetails/${depart.id}`);
          }}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;
