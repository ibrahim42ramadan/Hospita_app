import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_single_doctor } from "../../rtk/slices/doctors_slice";
import { get_singel_patient } from "../../rtk/slices/patientes_slices";
import { Outlet, useNavigate } from "react-router-dom";
import { DoorClosed, Minimize2, Settings } from "lucide-react";

export default function PatientProfile() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const navto = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const handling_uiprof = () => {
    if (user.type === "doctor") {
      return (
        <>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  navto("view_doctor_profile");
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                View Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navto("all_patient");
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                View Patients
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navto("today_appointments");
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                Appointments
              </button>
            </li>
          </ul>
        </>
      );
    } else if (user.type === "patient") {
      return (
        <>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  navto("view_patient_profile");
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                View Profile
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  navto("all_prescription");
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                View Prescriptions
              </button>
            </li>
          </ul>
        </>
      );
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center">
      <div className="w-full max-w-9xl grid grid-cols-1 md:grid-cols-12 gap-4 p-6">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarVisible ? "block" : "hidden"
          } md:block col-span-1 md:col-span-2 bg-white rounded-lg shadow-md p-4`}
        >
          <h2 className="text-center text-gray-500">Sidebar</h2>
          {handling_uiprof()}
        </div>

        {/* زرّ لإظهار وإخفاء الـ Sidebar للشاشات الصغيرة */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white p-2 h-10 rounded-lg"
          >
            {isSidebarVisible ? <Minimize2 /> : <Settings />}
          </button>
        </div>

        {/* محتوى الـ Patient Profile */}
        <div className="col-span-1 md:col-span-10 bg-white p-6 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
