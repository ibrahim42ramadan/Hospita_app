// src/LoginPage.js
import { Link } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login_patient } from "../../rtk/slices/patientes_slices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navto = useNavigate();
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const user_data = {
    email,
    password,
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            toast.promise(dispatch(login_patient(user_data)), {
              pending: "Promise is pending",
              // success: "Promise resolved 👌",
              // error: "Promise rejected 🤯",
            });

            try {
              const userrespons = await dispatch(login_patient(user_data));
              console.log(userrespons.payload.user);
              if (userrespons) {
                localStorage.setItem(
                  "user",
                  JSON.stringify(userrespons.payload.user)
                );
                navto("/");
              }
            } catch {
              const userrespons = await dispatch(login_patient(user_data));
              console.log(userrespons);

              toast.error("Invalid email or password");
            }
          }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Don't have an account? </p>
          </div>
          <button
            className="py-2 bg-gray-500 w-full text-white rounded-lg hover:bg-slate-300 mt-1 "
            onClick={() => {
              navto("/singup");
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
