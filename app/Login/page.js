"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import { useAuth } from "@/src/context/AuthContext";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // ✅ Green box
  const [error, setError] = useState("");        // ✅ Red box
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/tools");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        login(data.user, data.token);
        setSuccess(true);

        setTimeout(() => {
          router.push("/tools");
        }, 2000);
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Login failed ❌");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong ❗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen text-center bg-gray-200 px-4">
        <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md w-full">

          {/* ✅ Success Box */}
          {success && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded shadow">
              ✅ Login Successful! Redirecting...
            </div>
          )}

          {/* ❌ Error Box */}
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded shadow">
              ❌ {error}
            </div>
          )}

          <h2 className="text-xl font-bold text-neutral-800">
            Welcome to BoneCare
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Login to download your bone tumor detection report.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className={cn("flex w-full flex-col space-y-2", "mb-4")}>
              <label htmlFor="email" className="text-left font-medium text-sm">
                Email Address
              </label>
              <input
                id="email"
                placeholder="abc12@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded-md"
                disabled={loading}
                required
              />
            </div>

            <div className={cn("flex w-full flex-col space-y-2", "mb-4")}>
              <label htmlFor="password" className="text-left font-medium text-sm">
                Password
              </label>
              <input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border rounded-md"
                disabled={loading}
                required
              />
            </div>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md mb-6"
              type="submit"
              disabled={loading}
            >
              {loading ? "Processing..." : "Login →"}
            </button>

            <h2 className="text-md font-bold text-neutral-800">
            Don&apos;t have an account?
            </h2>
            <button
              onClick={() => router.push("/SignUp")}
              className="group/btn relative block h-10 w-2/4 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md mt-2 mx-auto"
              type="button"
              disabled={loading}
            >
              Sign up →
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
