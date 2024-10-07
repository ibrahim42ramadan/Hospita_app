import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_doctor } from "../../rtk/slices/doctors_slice";
import { add_nurse } from "../../rtk/slices/nurse_slice";
import { addEmployee } from "../../rtk/slices/employee_slice";

const Add_employee_Form = () => {
  const dispatch = useDispatch();
  // State hooks لكل قيمة
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [position, setposition] = useState("");
  const [department, setdepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = {
      name,
      position, // وظيفة الموظف (مثال: موظف استقبال، إداري)
      email,
      password,
      phone,
      img,
      department, // القسم الذي يعمل فيه الموظف
      shifts: [], // ورديات العمل الخاصة بالموظف
      tasks: [], // المهام اليومية أو المهام المكلف بها
      type: "staff", // تحديد النوع كموظف
    };

    // console.log(newDoctor);
    dispatch(addEmployee(newStaff));
    setEmail("");
    setName("");
    setPhone("");
    setImg("");
    setPassword("");
    setSpeciality("");
    // نفذ التعليمات ��لى المتصفح لتمكين التسجيل
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Add New employee
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
          <input
            type="text"
            id="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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

        {/* Submit button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Nurse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_employee_Form;
