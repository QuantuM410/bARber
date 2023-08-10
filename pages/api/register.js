import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export async function GET(req, res) {
//   try {
//     const data = req.body;
//     const user = await prisma.users.create({
//       data: {
//         username: data.username,
//         password: data.password,
//         email: data.email,
//         location: data.location,
//         phone: parseInt(data.phone),
//         gender: data.gender,
//       },
//     });
//     console.log(user);
//     console.log(typeof user.phone);
//     return NextResponse.json({ message: "User created successfully" });
//   } catch (error) {
//     console.log(error);
//   }
// }



export default async function handler(req, res) {
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
  }
}
