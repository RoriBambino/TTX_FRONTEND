import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBg from "../../images/auth-background.png";

export default function LoginPage() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  const handleRegister = () => {
    navigate("/register");
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
      <div className="flex flex-1 items-center justify-start pl-28">
        <h1 className="text-[18rem] lg:text-[16rem] md:text-[12rem] sm:text-[8rem] font-extrabold text-black leading-[14rem] text-left drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] tracking-tight">
          Login
          <br />
          here
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-[400px] text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Login Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-green font-bold text-lg py-2 px-8 rounded-full shadow-md transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register link */}
          <div className="text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <button 
                onClick={() => handleRegister()}
                className="text-green-500 hover:underline font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
