import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_doctor } from "../../rtk/slices/doctors_slice";

const AddDoctorForm = () => {
  const dispatch = useDispatch();
  // State hooks لكل قيمة
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [role, setrole] = useState("");
  const [experience, setexperience] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = {
      role,
      experience,
      name,
      speciality,
      email,
      password,
      phone,
      img,
      medicalHistory: [],
      appointments: [],
      patients: [],
      reviews: [],
      visits: [],
      type: "doctor",
    };
    // console.log(newDoctor);
    dispatch(add_doctor(newDoctor));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Add New Doctor
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Speciality */}
        <div className="flex flex-col">
          <label
            htmlFor="speciality"
            className="mb-2 font-medium text-gray-600"
          >
            Speciality
          </label>
          <select
            value={speciality}
            onChange={(event) => {
              setSpeciality(event.target.value);
              // dispatch(getall_departmentes(event.target.value));
            }}
            className="w-40"
          >
            <option value="Pediatrics"> الاطفال</option>
            <option value="Dermatology">الجلدية</option>
            <option value="Surgery">الجراحة</option>
            <option value="Psychiatry">النفسي</option>
          </select>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-medium text-gray-600">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label htmlFor="img" className="mb-2 font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="img" className="mb-2 font-medium text-gray-600">
            role
          </label>
          <select
            className="w-full"
            value={role}
            onChange={(e) => setrole(e.target.value)}
          >
            <option value="Resident "> تدريب </option>
            <option value="Specialist ">متخصص</option>
            <option value="Consultant">استشاري</option>
            <option value="Fellow ">زميل</option>
            <option value="General ">عام</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="img" className="mb-2 font-medium text-gray-600">
            experience
          </label>
          <input
            type="text"
            id="role"
            value={experience}
            onChange={(e) => setexperience(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctorForm;
