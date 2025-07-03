"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // ✅ NEW
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUserRaw = localStorage.getItem("loggedInUser");
  
    let storedUser = null;
    if (storedUserRaw) {
      try {
        storedUser = JSON.parse(storedUserRaw);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        storedUser = null;
      }
    }
  
    if (storedLogin === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser); // ✅ make sure you have setUser in state
    } else {
      setIsLoggedIn(false);
      setUser(null); // optional
    }
  
    setLoading(false);
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user); // ✅
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
