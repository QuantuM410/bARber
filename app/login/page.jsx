"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  async function loginUser() {
    axios
      .post("/api/login", formData)
      .then((res) => {
        console.log(res.data.user.username);
        if (res.data.user === null) {
          alert("Invalid username or password");
        } else {
          console.log(`/dashboard/${res.data.user.id}`);
          alert("Sucessfully logged in!");
          router.push(`/dashboard/${res.data.user.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the login logic here
    loginUser();
    console.log("User logged in", formData.username);
  };

  const backgroundStyles = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('assets/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={backgroundStyles}>
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-md">
        <Image
          className="mx-auto"
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
          <br />
          <button
            type="submit"
            className="w-full bg-black text-white border-2  px-4 py-2 rounded-md hover:bg-white hover:text-[#181818] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
