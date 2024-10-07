import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getall_departmentes } from "../../rtk/slices/depart_slice";

const DepartmentDetails = () => {
  const param = useParams();

  const departments = useSelector((state) => {
    return state.depart.departments;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall_departmentes());
  }, []);
  if (departments.length == 0) {
    return <h1>Loading...</h1>;
  }
  const depart = departments.find((d) => d.id == param.id);
  console.log(depart.doctors);

  const department_doctorshandlar = () => {
    if (depart.doctors) {
      console.log(depart.doctors);

      return depart.doctors.map((doctor) => {
        return (
          <div
            key={doctor.id}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-24 h-24 rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {doctor.name}
            </h3>
            <p className="text-gray-700">{doctor.specialty}</p>
            <p className="text-gray-700">
              {" "}
              <span className="font-black">phone:</span> {doctor.phone}
            </p>
          </div>
        );
      });
    } else {
      return <p>No doctors found in this department.</p>;
    }
  };
  return (
    <div className="container mx-auto px-4 py-12">
      {/* صورة القسم */}
      <div className="w-full h-64 mb-8">
        <img
          src={depart.img}
          alt={`${depart.name} Department`}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* معلومات القسم الرئيسية */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{depart.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{depart.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-green-600">
              Staff Count
            </h2>
            <p className="text-gray-700">{depart.staffCount} staff members</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-600">Location</h2>
            <p className="text-gray-700">{depart.location}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-600">
              Head of Department
            </h2>
            <p className="text-gray-700">{depart.head}</p>
          </div>
        </div>
      </div>

      {/* الدكاترة */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-3xl text-center font-bold  mb-10 text-gray-800 mb-4">
          الأطباء
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {department_doctorshandlar()}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
