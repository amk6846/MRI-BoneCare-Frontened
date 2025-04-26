import bcrypt from "bcryptjs"; // Import bcryptjs
import connectMongoDB from "@/lib/mongodb"; // MongoDB connection
import User from "@/models/user"; // Import the User model
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB(); // MongoDB connection established

  const { firstName, lastName, email, password } = await request.json();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists!" },
      { status: 400 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with 10 salt rounds

  // Create new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword, // Save the hashed password
  });

  await newUser.save(); // Save the user in the database

  return NextResponse.json({ message: "User registered successfully!" });
}
