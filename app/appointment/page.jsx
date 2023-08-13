"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const BookAppointments = () => {
  const [salonOptions, setSalonOptions] = useState([]); // ["Salon 1", "Salon 2", "Salon 3"]
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
    const updatedFormData = {
      ...formData,
      appointmentTime: formData.appointmentTime + ":00.000Z",
    };
    console.log(updatedFormData)
    // Send appointment data to the server
    axios.post("/api/appointment", updatedFormData).then((response) => {
      console.log(response.data);
      alert("Appointment booked successfully!");
    });
  };

  async function getSalons() {
    try {
      const response = await axios.get("/api/salon");
      console.log(response);

      // Extract usernames from the response data
      const salons = response.data.salons.map((salon) => salon.username);
      console.log(salons);

      setSalonOptions(salons);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSalons();
  }, []);

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
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Client Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="clientPhone"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Client Phone Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="datetime-local"
              name="appointmentTime"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="appointmentDetails"
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
              placeholder="Appointment Details"
              rows={4}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="w-full bg-black text-white border-2  px-4 py-2 rounded-md hover:bg-white hover:text-[#181818] transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointments;
