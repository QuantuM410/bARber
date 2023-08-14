import { prisma } from "../../db.ts";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS for all routes

app.post("/", async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const user = await prisma.users.findUnique({
        where: {
          username: data.username,
          password: data.password,
        },
      });
      console.log(data);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ message: "User not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
});

export default app;
