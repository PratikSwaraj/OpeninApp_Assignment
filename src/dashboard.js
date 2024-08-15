import React, { useState } from "react";
import base from "./base.png";
import Calender from "./Calender.png";
import Invoice from "./Invoice.png";
import Notification from "./Notification.png";
import Schedule from "./Schedule.png";
import Settings from "./Settings.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white-200 transition-transform duration-300 ease-in-out z-30 lg:relative lg:translate-x-0 lg:w-1/4 ${
          isSidebarOpen ? "bg-opacity-90" : ""
        }`}
      >
        <div className="p-4">
          <img src={base} alt="base" className="h-auto mb-3" />
          <ul className="space-y-6">
            <li className="text-gray-400 font-bold text-xs md:text-base hover:bg-green-200 p-2 rounded">
              Dashboard
            </li>
            <li className="text-gray-400 font-bold text-xs md:text-base hover:bg-green-200 p-2 rounded">
              Upload
            </li>
            <li className="hover:bg-green-200 p-2 rounded">
              <img src={Invoice} alt="Invoice" />
            </li>
            <li className="hover:bg-green-200 p-2 rounded">
              <img src={Schedule} alt="Schedule" />
            </li>
            <li className="hover:bg-green-200 p-2 rounded">
              <img src={Calender} alt="Calendar" />
            </li>
            <li className="hover:bg-green-200 p-2 rounded">
              <img src={Notification} alt="Notification" />
            </li>
            <li className="hover:bg-green-200 p-2 rounded">
              <img src={Settings} alt="Settings" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gray-50 lg:ml-1/4">
        <div className="flex space-x-5">
          <button
            className="lg:hidden p-1 bg-gray-200 rounded-md mb-4 flex items-center space-x-2"
            onClick={toggleSidebar}
          >
            <span className="text-xs">=</span>
          </button>
          <img src={base} alt="base" className="h-6 lg:hidden" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
