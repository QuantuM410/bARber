import { prisma } from "../../db.ts";
import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const data = req.body;
    const salon = await prisma.users.findUnique({
      where: {
        username: data.salon,
      },
    });
    const salon_id = salon.id;
    const appointment = await prisma.appointments.create({
      data: {
        user_id: salon_id,
        client_name: data.clientName,
        client_phone: data.clientPhone,
        time: data.appointmentTime,
        body: data.appointmentDetails,
      },
    });
    console.log(data);
    res.status(200).json({ appointment });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Deploy the serverless function
module.exports = app;
