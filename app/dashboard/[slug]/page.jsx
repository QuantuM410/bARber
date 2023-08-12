"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ShopDashboard({ params }) {
  const [appointments, setAppointments] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    getAppointments();
  }, [filterOption]);

  async function getAppointments(timePeriod = null) {
    try {
      const url = "/api/dashboard/" + params.slug;
      const response = await axios.get(url);
      const appointments = response.data.appointments;
      
      if (timePeriod === "today") {
        console.log("tday")
        const today = new Date();
        console.log(today)
        const filteredAppointments = appointments.filter((appointment) => {
          const appointmentDate = new Date(appointment.time);
          return (
            appointmentDate.getDate() === today.getDate() &&
            appointmentDate.getMonth() === today.getMonth() &&
            appointmentDate.getFullYear() === today.getFullYear()
          );
        });
        console.log(filteredAppointments)
        setAppointments(filteredAppointments);
      } else if (timePeriod === "tomorrow") {
        console.log("tom")
        const tomorrow = new Date();
        console.log(tomorrow)
        tomorrow.setDate(tomorrow.getDate() + 1);
        const filteredAppointments = appointments.filter((appointment) => {
          const appointmentDate = new Date(appointment.time);
          return (
            appointmentDate.getDate() === tomorrow.getDate() &&
            appointmentDate.getMonth() === tomorrow.getMonth() &&
            appointmentDate.getFullYear() === tomorrow.getFullYear()
          );
        });
        setAppointments(filteredAppointments);
      } else if (timePeriod === null) {
        console.log("object")
        setAppointments(appointments);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterOption(event.target.value);
    if (event.target.value === "today") {
      getAppointments("today");
    } else if (event.target.value === "tomorrow") {
      getAppointments("tomorrow");
    } else {
      getAppointments();
    }
  };
  
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
