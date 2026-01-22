"use client";
import { useState } from "react";
import {
  Dashboard,
  MenuBook,
  Map,
  Work,
  SmartToy,
  Store,
  MonetizationOn,
} from "@mui/icons-material";
import Image from "next/image";
import Divider from "@mui/material/Divider";

const menu = [
  { icon: <Dashboard />, label: "Dashboard" },
  { icon: <MenuBook />, label: "Practice", active: true },
  { icon: <Map />, label: "Roadmaps" },
  { icon: <Work />, label: "Jobs with ATS" },
  { icon: <SmartToy />, label: "AI Interview" },
  { icon: <Store />, label: "Tech Shop" },
  { icon: <MenuBook />, label: "Blogs" },
  { icon: <MonetizationOn />, label: "Finance" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-64 bg-white shadow-md h-screen p-6 flex flex-col">
                
        <div className="p-0 -ml-12 -mt-2">
            <Image
              src="/images/logo.png"
              alt="emple Logo"
              width={220}
              height={40}
              priority
            />
         </div>
      <Divider sx={{ my: 2 }} />
      {/* Scrollable menu */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {menu.map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200
              ${
                activeItem === item.label
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
