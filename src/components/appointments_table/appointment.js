import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_appointments } from "../../rtk/slices/appointment_slice";
import Appointment_item from "../appointment_items/Appointment_item";

export default function Appointment() {
  const lochaluser = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const appointment = useSelector((state) => {
    const all_appointment = state.appointment.allappointments;
    const doctorappointment = all_appointment.filter((appointment) => {
      return appointment.doctor.id === lochaluser.id;
    });
    return doctorappointment;
  });

  useEffect(() => {
    dispatch(get_all_appointments());
  }, []);

  return (
    <div className="p-3 rounded-lg m-3 h-screen">
      <div>
        <h1 className="text-2xl mb-5 font-semibold">appointmentes </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-green-200">
            <tr className="">
              <th className="p-2 text-center w-1/12">ID</th>
              <th className="p-2 text-center w-1/12">Img</th>
              <th className="p-2 text-center">Name</th>
              <th className="p-2 text-center">Phone</th>
              <th className="p-2 text-center">Date</th>
              <th className="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((apoint) => {
              return <Appointment_item key={apoint.id} apoint={apoint} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
