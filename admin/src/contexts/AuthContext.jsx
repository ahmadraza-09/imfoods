import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // <-- note named import
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_BACKEND_URL;

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp && decoded.exp < now) {
          logout();
        } else {
          setIsAuthenticated(true);
          setUser(decoded);
        }
      } catch {
        logout();
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      // console.log("Login response:", res.data);

      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      const decoded = jwtDecode(token);
      setIsAuthenticated(true);
      setUser(decoded);

      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login"); // redirect on logout/expiration
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
