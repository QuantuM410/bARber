import { prisma } from "../../../db.ts";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = parseInt(req.query.slug);
    try {
      const appointments = await prisma.appointments.findMany({
        where: {
          user_id: id,
        },
      });
      return res.status(200).json({ appointments });
    } catch (error) {
      return res.status(400).json({ error });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
