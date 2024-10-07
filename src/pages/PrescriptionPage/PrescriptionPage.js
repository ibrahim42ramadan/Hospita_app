import React from "react";

const PrescriptionPage = () => {
  return (
    <div className="max-w-4xl mt-10 mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        {/* Hospital Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ABC Hospital</h1>
        <p className="text-gray-500 text-lg mb-6">Department of Radiology</p>
      </div>

      {/* Doctor Information */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Doctor: Dr. Ahmed Ali
          </h2>
        </div>
        <div>
          <p className="text-gray-600">Date: 06/10/2024</p>
        </div>
      </div>

      {/* Prescription Table */}
      <div className="border-t-2 border-gray-200 pt-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Prescription</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">
                  Medicine Name
                </th>
                <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">
                  Dosage
                </th>
                <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Paracetamol</td>
                <td className="py-2 px-4 border-b">500mg</td>
                <td className="py-2 px-4 border-b">Twice a day</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Ibuprofen</td>
                <td className="py-2 px-4 border-b">200mg</td>
                <td className="py-2 px-4 border-b">Once a day</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Amoxicillin</td>
                <td className="py-2 px-4 border-b">250mg</td>
                <td className="py-2 px-4 border-b">Three times a day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">Thank you for choosing ABC Hospital.</p>
      </div>
    </div>
  );
};

export default PrescriptionPage;
