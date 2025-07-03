import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGODB_URI;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const client = await MongoClient.connect(uri);
    const db = client.db("bonecare");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // ✅ Combine firstName + lastName
    const fullName = `${user.firstName} ${user.lastName}`;

    // ✅ Return fullName and email to frontend
    return NextResponse.json({
      user: {
        name: fullName,
        email: user.email,
      },
      token: "dummy-token", // optional: can use JWT later
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Something went wrong ❗" }, { status: 500 });
  }
}
