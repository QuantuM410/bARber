
"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import router from "next/navigation";
export default function Register() {
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

  async function createUser() {
    axios.post("/api/register", formData).then((res) => {
      console.log(res);
      window.location.href = "/login";
      
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the registration logic here
    createUser();
    console.log(formData);
  };
  const backgroundStyles = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('assets/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={backgroundStyles}>
      <div className="w-full max-w-md p-8 rounded-lg bg-opacity-80 bg-gray-900 text-black">
        <Image
          className="mx-auto top-0 display-contain"
          src="/assets/image.png"
          alt="logo"
          width={150}
          height={150}
        />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Username"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="location"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Location"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Phone Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="gender"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              onChange={handleInputChange}
              value={formData.gender}
            >
              <option value="">Your clientele</option>
              <option value="Unisex">Unisex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <br />
          <button
            type="submit"
            className="w-full bg-black text-white border-2  px-4 py-2 rounded-md hover:bg-white hover:text-[#181818] transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}