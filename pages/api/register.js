import { prisma} from "../../db.ts";
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
  if (req.method === "POST") {
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
  } else {
   return res.status(405).json({ message: "Method not allowed" });
  }
}
