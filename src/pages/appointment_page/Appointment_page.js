import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { add_appointment } from "../../rtk/slices/appointment_slice";
import { get_single_doctor } from "../../rtk/slices/doctors_slice";

export default function Appointment_page() {
  const navto = useNavigate();
  const { id } = useParams();
  // patient
  const patient = JSON.parse(localStorage.getItem("user"));
  // doctor
  const doctor = useSelector((state) => {
    return state.doctors.singleDoctor;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_single_doctor(id));
    // dispatch(get_doctor_by_id(id));
  }, []);

  const [date, setDate] = useState(new Date());
  const [disctiption, setdisctiption] = useState("");
  const appointment = {
    date: date,
    disctiption,
    doctor,
    patient,
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Book an Appointment
        </h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            // console.log(appointment);
            dispatch(add_appointment(appointment));
            navto("/doctors");
          }}
        >
          {/* حقل التاريخ */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="appointmentDate"
            >
              Appointment Date
            </label>
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
              type="date"
              id="appointmentDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* حقل الملاحظات الإضافية */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="additionalNotes"
            >
              Additional Notes
            </label>
            <textarea
              onChange={(e) => {
                setdisctiption(e.target.value);
              }}
              value={disctiption}
              id="additionalNotes"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter any additional notes here..."
            ></textarea>
          </div>

          {/* زر الحجز */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
