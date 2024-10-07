import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ContactUs = () => {
  const dispatch = useDispatch();
  // State to handle the form inputs
  const [formData, setFormData] = useState({
    message: "",
  });

  // Handler for form inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (can be completed by you later)
  const handleSubmit = (e) => {
    e.preventDefault();
    const usermessage = {
      message: formData.message,
      user: JSON.parse(localStorage.getItem("user")),
    };
    axios.post(`http://localhost:4444/masseges`, usermessage);
    // dispatch(send_masseg_to_admin(usermessage));
    // Logic to handle form submission (e.g., sending message to server)
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-8">
        We would love to hear from you! Please fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
