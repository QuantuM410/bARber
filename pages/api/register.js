import { prisma } from "../../db.ts";
import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const data = req.body;
    const user = await prisma.users.create({
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
        location: data.location,
        phone: data.phone,
        gender: data.gender,
      },
    });
    console.log(user);
    console.log(typeof user.phone);
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default app;
