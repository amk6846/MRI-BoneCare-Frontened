"use client";

import React, { useState } from "react"; // ✅ useState import kiya hai for form data
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils"; // ✅

const LoginPage = () => {
  const router = useRouter();

  // ✅ yeh 2 state add karni hai email/password capture karne ke liye
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // ✅ send email and password
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        alert("Login Successful ✅");
        router.push("/tools"); // ✅ login ke baad home page pe redirect
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Login Failed ❌");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong ❗");
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex items-center justify-center min-h-screen text-center bg-gray-200">
        <div>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome to BoneCare
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Login to download your bone tumor detection report.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            {/* ✅ Input fields mein value aur onChange add kiya */}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="abc12@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mb-6"
              type="submit"
            >
              Login &rarr;
              <BottomGradient />
            </button>

            <h2 className="text-md font-bold text-neutral-800 dark:text-neutral-200">
              Don’t have an account?
            </h2>
            <button
              onClick={() => router.push("/SignUp")}
              className="group/btn relative block h-10 w-2/4 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-2 mx-auto"
              type="button"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);

// ✅ Input ko thoda modify kiya
const Input = ({ id, placeholder, type, value, onChange }) => (
  <input
    id={id}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    className="px-4 py-2 border rounded-md"
    required
  />
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="text-left font-medium text-sm">
    {children}
  </label>
);

export default LoginPage;
