"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const BookAppointments = () => {
  const [salonOptions, setSalonOptions] = useState([]); // ["Salon 1", "Salon 2", "Salon 3"
  const [formData, setFormData] = useState({
    salon: "",
    clientName: "",
    clientPhone: "",
    appointmentTime: "",
    appointmentDetails: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Send appointment data to the server
    axios.post("/api/appointment", formData)
      .then((response) => {
        console.log(response.data);
        alert("Appointment booked successfully!");
      })
  };

  async function getSalons() {
    try {
      const response = await axios.get("/api/salon");
      console.log(response);
  
      // Extract usernames from the response data
      const salons = response.data.salons.map(salon => salon.username);
      console.log(salons);
  
      setSalonOptions(salons);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSalons();
    }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Image
          className="mx-auto"
          src="/assets/logo.png"
          alt="logo"
          width={150}
          height={150}
        />
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <select
              name="salon"
              className="w-full px-3 py-2 border rounded-md"
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Salon</option>
              {salonOptions.map((salon, index) => (
                <option key={index} value={salon}>
                  {salon}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="clientName"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Client Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="clientPhone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Client Phone Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="datetime-local"
              name="appointmentTime"
              className="w-full px-3 py-2 border rounded-md"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="appointmentDetails"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Appointment Details"
              rows={4}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointments;
