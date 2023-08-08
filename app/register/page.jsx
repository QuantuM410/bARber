"use client";
import React, { useState } from "react";
import Image from 'next/image'
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
    phone: "",
    gender: "", // Default value
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the registration logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Image className="mx-auto" src="/assets/logo.png" alt="logo" width={150} height={150}/>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Username"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="location"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Location"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Phone Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <div className="absolute left-3 top-2 text-gray-400">Your clientelle</div>
              <select
                name="gender"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="Unisex">Unisex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
