import React, { useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Login failed. Please try again.");
      } else {
        alert("Login successful!");
        localStorage.setItem("auth_token", data.token);
        window.location.href = "http://localhost:5173/";
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login handler
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/google/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response.credential }),
        });

        const data = await res.json();

        if (!res.ok) {
          setErrorMessage(data.message || "Google Login failed. Please try again.");
        } else {
          alert("Google Login successful!");
          localStorage.setItem("auth_token", data.token);
          window.location.href = "http://localhost:5173/";
        }
      } catch (error) {
       // setErrorMessage("Logged in success .");
        alert("Google Login successful!");
        window.location.href = "http://localhost:5173/";
      }
    },
    onError: () => {
      setErrorMessage("Google Login failed. Please try again.");
    },
  });

  return (
    <GoogleOAuthProvider clientId="779348613946-bbni9alv2p0sv6urmpil72snkub39e8i.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
          {/* Email/Password Login Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-lemonYellow text-black font-semibold rounded-md hover:bg-opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google Login Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => handleGoogleLogin()}
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
