import { connectMongoDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  const email = req.headers.get("email");

  await connectMongoDB();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    name: user.firstName,
    email: user.email,
  });
}
