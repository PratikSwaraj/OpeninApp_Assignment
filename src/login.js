import React from "react";
import img from "./img.png";
import base from "./base.png";
import x from "./x.png";
import discord from "./discord.png";
import linked from "./linked.png";
import git from "./git.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden">
        <div className="hidden md:block w-1/2 bg-blue-600 p-10">
          <div className="text-white h-full">
            <div className="text-left bg-blue-400 flex flex-col justify-between rounded-lg pl-3 pt-4">
              <img src={base} alt="base" className="w-1/4 h-aut0 mb-3" />
              <h2 className="mt-5 text-3xl w-1/2">
                Generate detailed reports with just one click
              </h2>
              <img
                src={img}
                alt="Report generation"
                className="w-1/2 h-auto object-contain self-end mt-4"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <p className="text-center text-gray-500 font-bold">
            Sign in to your account
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLogin}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mr-2"
            >
              Sign in with Google
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md">
              Sign in with Apple
            </button>
          </div>
          <form
            className="mt-8 space-y-6 bg-gray-200 p-5 rounded-lg"
            onSubmit={handleLogin}
          >
            <div>
              <label className="block text-gray-700 font-bold">
                Email address
              </label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                required
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
          <div className="flex mt-20 space-x-6 justify-center">
            <img src={git} alt="Git" className="w-5 h-5" />
            <img src={x} alt="X" className="w-5 h-5" />
            <img src={linked} alt="LinkedIn" className="w-6 h-6" />
            <img src={discord} alt="Discord" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
