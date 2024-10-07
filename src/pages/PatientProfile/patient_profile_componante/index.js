import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_singel_patient } from "../../../rtk/slices/patientes_slices";

export default function Pationt_profile_card() {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_singel_patient(3));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">
        Patient Profile
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* صورة المريض */}
        <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
          <img
            className="rounded-full w-48 h-48 object-cover shadow-md"
            src={user.img}
            alt="Patient"
          />
        </div>

        {/* معلومات المريض الشخصية */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4">Patient Details</h3>
          <p className="text-gray-600 mb-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>

          {/* التاريخ الطبي */}
          <h3 className="text-2xl font-semibold mt-8 mb-4">Medical History</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Diabetes (Type 2)</li>
            <li>High blood pressure</li>
            <li>Allergy to penicillin</li>
          </ul>

          {/* المواعيد السابقة */}
          <h3 className="text-2xl font-semibold mt-8 mb-4">
            Past Appointments
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>General check-up on 12th September 2023</li>
            <li>Cardiology visit on 5th August 2023</li>
          </ul>

          {/* زر تعديل المعلومات */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
