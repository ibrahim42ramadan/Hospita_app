import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Our Hospital
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Welcome to [Your Hospital Name]
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>[Your Hospital Name]</strong>, we are dedicated to
          providing top-tier healthcare services with a focus on patient
          satisfaction and the highest medical standards. Our hospital,
          established in <strong>1990</strong>, has grown to become one of the
          most trusted healthcare institutions in the region.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          State-of-the-Art Facilities
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>24/7 Emergency Care</li>
          <li>Advanced Diagnostic and Imaging</li>
          <li>Specialized Surgical Departments</li>
          <li>Maternity and Pediatric Care</li>
          <li>Oncology and Cancer Treatment Center</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team consists of over <strong>500</strong> highly trained medical
          professionals, including doctors, nurses, and specialists in various
          fields of medicine.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Awards and Recognition
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Best Hospital in the Region (2023)</li>
          <li>Excellence in Patient Safety (2022)</li>
          <li>Outstanding Maternity Services (2021)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Our Vision for the Future
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our vision is to become a leader in healthcare not only locally but
          internationally, setting new standards in medical care and innovation.
        </p>
      </section>
    </div>
  );
};

export default About;
