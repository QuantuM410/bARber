import { prisma } from "../../db.ts";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = req.body;
      const salons = await prisma.users.findMany({
        select: {
          username: true,
        },
      });
      console.log(data);
      res.status(200).json({ salons });
    } catch (error) {
      res.status(400).json({ message: "Salons not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
