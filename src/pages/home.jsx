import React from "react";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-1/2 p-8 border-2 ">
        <h1 className="text-4xl font-bold">Welcome to our website!</h1>
        <p className="mt-4 text-lg">
          We are glad to have you here. Explore our content and enjoy your stay!
        </p>
        <Link to="/todoapp">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default home;
