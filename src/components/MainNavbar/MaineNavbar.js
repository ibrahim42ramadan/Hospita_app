import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const lochaluser = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const navto = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navto("/");
  };
  const handelloginanlogout = () => {
    if (lochaluser) {
      return (
        <div className="flex">
          <button
            className="rounded-lg p-2 me-1 bg-red-500 text-white"
            onClick={() => {
              localStorage.clear();
              navto("/login");
            }}
          >
            loaout
          </button>
          <div
            className="w-10 h-10 overflow-hidden rounded-full"
            onClick={() => {
              navto("/PatientProfile");
            }}
          >
            <img
              src={lochaluser.img}
              alt={lochaluser.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    } else {
      return (
        <>
          {" "}
          <button
            className="rounded-lg p-2 me-1 bg-red-500 text-white"
            onClick={() => {
              navto("/login");
            }}
          >
            login
          </button>
          <button
            className=" rounded-lg p-2 bg-blue-400 text-white "
            onClick={() => {
              navto("/singup");
            }}
          >
            singup
          </button>
        </>
      );
    }
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Logo</div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on larger screens */}
        <ul
          className={`lg:flex space-x-8 hidden ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              onClick={() => {
                navto("/home");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              onClick={() => {
                navto("/about");
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              onClick={() => {
                navto("/doctors");
              }}
            >
              Doctors
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              onClick={() => {
                navto("/contact");
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* User Icon / Dropdown */}
        <div className="relative hidden lg:block">{handelloginanlogout()}</div>
      </div>

      {/* Dropdown for mobile view */}
      {menuOpen && (
        <>
          <ul className="lg:hidden flex flex-col space-y-4 my-4">
            <li>
              <button
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={() => {
                  navto("/home");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={() => {
                  navto("/about");
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={() => {
                  navto("/doctors");
                }}
              >
                Doctors
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={() => {
                  navto("/contact");
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
          <div className="relative flex justify-end  lg:block">
            {handelloginanlogout()}
          </div>
        </>
      )}
    </nav>
  );
}
