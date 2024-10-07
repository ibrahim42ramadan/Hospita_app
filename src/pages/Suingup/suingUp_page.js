import { Eye, EyeOff, Mail, ScanEyeIcon, User2Icon } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_patient } from "../../rtk/slices/patientes_slices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SingUp_page() {
  const navto = useNavigate();
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("@gmail.com");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState(""); // حقل رقم الهاتف
  const [age, setage] = useState(""); // حقل العمر
  const [img, setimg] = useState("");
  const elsimgurl =
    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1727566317~exp=1727569917~hmac=ba11e62c286c8882a4349ac9e42efe384e8ea54353a3aade6b7da3dfc6eb25b8&w=740";
  const newsuer_singup = {
    name,
    gender,
    email,
    password,
    img: img || elsimgurl,
    phone,
    age,
    type: "patient",
    medicalHistory: [],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Create Account
        </h2>
        <form
          className="mt-6"
          onSubmit={async (e) => {
            e.preventDefault();
            if (newsuer_singup.gender === "") {
              toast.info("chose your gender");
            } else {
              try {
                const resultaction = await dispatch(
                  add_patient(newsuer_singup)
                );
                if (resultaction.payload.user) {
                  toast.success(`👨‍🎤 patein is Created successfully`);
                  setname("");
                  setemail("");
                  setpassword("");
                  setgender("");
                  setphone("");
                  setage("");
                  setimg("");
                  navto("/login");
                } else {
                  toast.error(resultaction.payload.maseg);
                }
              } catch {
                toast.error("Failed to add user");
              }
            }
          }}
        >
          {/* Full Name Field */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700">Full Name</label>
              <input
                required
                onChange={(event) => setname(event.target.value)}
                value={name}
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="w-full md:w-1/2 pl-2">
              <label className="block text-gray-700">Email</label>
              <input
                onChange={(event) => setemail(event.target.value)}
                value={email}
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password and Image URL Field */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              <label className="block flex justify-between text-gray-700">
                Password
              </label>
              <input
                required
                onChange={(event) => setpassword(event.target.value)}
                value={password}
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Create a password"
              />
            </div>

            {/* Image URL Field */}
            <div className="w-full md:w-1/2 pl-2">
              <label className="block justify-between text-gray-700">
                Image URL
              </label>
              <input
                onChange={(event) => setimg(event.target.value)}
                value={img}
                type="url"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Put your image link here"
              />
            </div>
          </div>

          {/* Gender Field */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              <label className="block justify-between text-gray-700">
                Gender
              </label>
              <select
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(event) => setgender(event.target.value)}
                value={gender}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Phone Field */}
            <div className="w-full md:w-1/2 pl-2">
              <label className="block text-gray-700">Phone Number</label>
              <input
                required
                onChange={(event) => setphone(event.target.value)}
                value={phone}
                type="tel"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Age Field */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full">
              <label className="block text-gray-700">Age</label>
              <input
                required
                onChange={(event) => setage(event.target.value)}
                value={age}
                type="number"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your age"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500  text-white py-2 rounded-lg   flex gap-4 justify-center  hover:bg-blue-600 transition duration-200"
          >
            creat account <User2Icon />
          </button>
          <button
            onClick={() => {
              navto("/login");
            }}
            className="w-full mt-3 bg-indigo-500 text-white py-2 rounded-lg flex gap-4 justify-center hover:bg-indigo-600 transition duration-200"
          >
            I have an account <Mail />
          </button>
        </form>
      </div>
    </div>
  );
}
