import React from "react";

export default function PrescriptionCard({ prescription }) {
  return (
    <div className="max-w-xm w-full mx-auto p-6 bg-white shadow-lg rounded-lg mb-6">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-blue-600">Prescription</h1>
        <p className="text-gray-600">{prescription.date}</p>
      </div>

      {/* Doctor and patient information */}
      <div className="mb-4">
        <p className="text-gray-800">
          <span className="font-bold">Doctor:</span> {prescription.doctor.name}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Patient:</span>{" "}
          {prescription.patient.name}
        </p>
      </div>

      {/* Medicines list */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-blue-600 mb-2">Medicines:</h2>
        {prescription.medicines.map((medicine, index) => (
          <div key={index} className="mb-2 p-2 border-b border-gray-300">
            <p>
              <span className="font-bold">Medicine {index + 1}:</span>{" "}
              {medicine.medicineName}
            </p>
            <p>Dosage: {medicine.dosage}</p>
            <p>Frequency: {medicine.frequency}</p>
            <p>Duration: {medicine.duration}</p>
          </div>
        ))}
      </div>

      {/* Notes section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-blue-600 mb-2">Notes:</h2>
        <p className="text-gray-700">
          {prescription.notes || "No additional notes."}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-sm">Hospital Name</p>
        <p className="text-gray-600 text-sm">
          Speciality: {prescription.doctor.speciality || "N/A"}
        </p>
      </div>
    </div>
  );
}
