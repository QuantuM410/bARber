import { prisma } from "../../db.ts";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      //   const p = data.appointmentTime.split(/\D/);
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
      //   res.status(200).json({ salon_id });

      res.status(200).json({ appointment });
    } catch (error) {
      res.status(400).json({ error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
