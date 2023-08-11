"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ShopDashboard({ params }) {
  const [appointments, setAppointments] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    getAppointments();
  }, [filterOption]);

  async function getAppointments() {
    try {
      console.log(params.slug)
      const url = "/api/dashboard/" + params.slug;
      console.log(url);
      const response = await axios.get(url);
      setAppointments(response.data.appointments);
      console.log(response.data.appointments);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };
  console.log(appointments)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Shop Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">
          Filter Appointments:
        </label>
        <select
          id="filter"
          value={filterOption}
          onChange={handleFilterChange}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
        </select>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Client Name</th>
            <th className="p-2">Client Phone</th>
            <th className="p-2">Appointment Time</th>
            <th className="p-2">Appointment Details</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b border-gray-300">
              <td className="p-2">{appointment.client_name}</td>
              <td className="p-2">{appointment.client_phone}</td>
              <td className="p-2">{appointment.time}</td>
              <td className="p-2">{appointment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
