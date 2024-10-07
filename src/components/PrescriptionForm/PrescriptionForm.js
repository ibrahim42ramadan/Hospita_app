import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get_all_patientes } from "../../rtk/slices/patientes_slices";
import axios from "axios";
import { addprescriptions } from "../../rtk/slices/Prescription_slice";
import { toast } from "react-toastify";

export default function PrescriptionForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const navto = useNavigate();
  const [medicines, setMedicines] = useState([
    { medicineName: "", dosage: "", frequency: "", duration: "" },
  ]);
  const [notes, setNotes] = useState(""); // ملاحظات الروشتة

  const pationt = useSelector((state) => {
    const patient = state.patientes.allpatientes;
    const ourpatient = patient.filter((patient) => {
      return patient.id == params.id;
    });
    return { ...ourpatient[0] };
  });

  useEffect(() => {
    dispatch(get_all_patientes());
  }, [dispatch]);

  const handleChange = (e, index, field) => {
    const newMedicines = [...medicines];
    newMedicines[index][field] = e.target.value;
    setMedicines(newMedicines);
  };

  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { medicineName: "", dosage: "", frequency: "", duration: "" },
    ]);
  };

  let time = new Date();
  let day = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let date = `${day}/${month + 1}/${year}`;

  const local_doctor = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async () => {
    // إنشاء الكائن الذي سيجمع البيانات
    const prescription = {
      doctor: local_doctor,
      patient: pationt,
      date: date,
      medicines: medicines,
      notes: notes,
    };
    if (local_doctor.type === "doctor") {
      dispatch(addprescriptions(prescription));
      navto("/PatientProfile/today_appointments");
    } else {
      toast.error("you are nat viled");
    }
    // إرسال البيانات إلى السيرفر باستخدام axios
    try {
      const response = await axios.post("URL_TO_YOUR_SERVER", prescription);
      console.log("Prescription submitted:", response.data);
    } catch (error) {
      console.error("Error submitting prescription:", error);
    }
  };

  if (!pationt) {
    return <div>Loading...</div>;
  }

  if (!local_doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <div>
        <h1 className="text-blue-600 text-center">Hospital Logo</h1>
        <div className="flex justify-between">
          <h3>
            Doctor: <span className="text-indigo-600">{local_doctor.name}</span>
          </h3>
        </div>
        <div className="flex justify-between">
          <h2>
            Patient: <span className="text-blue-400">{pationt.name}</span>
          </h2>
          <p>Date: {date}</p>
        </div>
      </div>

      <h2 className="mt-6 mb-4 font-bold text-lg">Medicines</h2>
      {medicines.map((medicine, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Medicine {index + 1}</label>
          <input
            type="text"
            placeholder="Medicine Name"
            className="border p-2 rounded w-full mb-2"
            value={medicine.medicineName}
            onChange={(e) => handleChange(e, index, "medicineName")}
          />
          <input
            type="text"
            placeholder="Dosage"
            className="border p-2 rounded w-full mb-2"
            value={medicine.dosage}
            onChange={(e) => handleChange(e, index, "dosage")}
          />
          <input
            type="text"
            placeholder="Frequency"
            className="border p-2 rounded w-full mb-2"
            value={medicine.frequency}
            onChange={(e) => handleChange(e, index, "frequency")}
          />
          <input
            type="text"
            placeholder="Duration"
            className="border p-2 rounded w-full"
            value={medicine.duration}
            onChange={(e) => handleChange(e, index, "duration")}
          />
        </div>
      ))}

      <button
        onClick={addMedicine}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add New Medicine
      </button>

      <div className="mt-6">
        <label className="block mb-2">Notes</label>
        <textarea
          className="border p-2 rounded w-full"
          rows="4"
          placeholder="Add any additional notes here"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-4 mt-6 rounded hover:bg-green-600"
      >
        Submit Prescription
      </button>
    </div>
  );
}
