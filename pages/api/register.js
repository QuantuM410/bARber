import { prisma } from "../../db.ts";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
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
      return res.status(200).json(user); // Return user data directly
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
