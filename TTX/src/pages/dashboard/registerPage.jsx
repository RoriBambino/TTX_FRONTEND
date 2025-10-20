import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBg from "../../images/auth-background.png";

export default function RegisterPage() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  const handleLogin = () => {
    navigate("/login");
  }

  return (
    <div
      className="relative flex h-screen w-screen bg-cover bg-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
      style={{
        backgroundImage: `url(${authBg})`,
      }} ></div>
    
      {/* Left Side */}
      <div className="flex flex-1 items-center justify-start pl-32">
        <h1 className="text-[14rem] font-extrabold text-black leading-tight text-left drop-shadow-lg">
          Register
          <br />
          here
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-[450px] text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 rounded-md border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 rounded-md border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-3 rounded-md border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 rounded-md border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Register Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full bg-green-400 hover:bg-green-500 text-green font-bold text-lg py-3 rounded-full shadow-md transition-all duration-200"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login link */}
          <div className="text-center mt-6 text-gray-700">
            Already have an account?{" "}
            <button 
            onClick={() => handleLogin()} 
            className="text-green-500 hover:underline font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
