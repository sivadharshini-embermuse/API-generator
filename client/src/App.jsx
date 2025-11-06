import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("Backend URL is:", import.meta.env.VITE_BACKEND_URL);

  // ✅ Apply .dark to <html> so Tailwind dark classes work globally
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-inter relative overflow-hidden transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800"
      }`}
      style={{
    backgroundImage: `url('https://tse3.mm.bing.net/th/id/OIP.g6d1Sbq8Zp6ecrHtox28fgHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3')`, // or replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}
    >
      {/* 🔮 Background Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-25 ${
          darkMode
            ? "bg-gradient-to-r from-green-400 to-lime-500"
            : "bg-gradient-to-r from-blue-400 to-indigo-400"
        }`}
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-48 -right-48 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-25 ${
          darkMode
            ? "bg-gradient-to-r from-lime-300 to-emerald-500"
            : "bg-gradient-to-r from-indigo-300 to-blue-500"
        }`}
      />

      {/* 🌗 Navbar + Theme Toggle */}
      <div className="relative z-10 flex justify-between items-center max-w-6xl mx-auto p-6">
        <Navbar />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* 🧩 Page Content */}
      <main
        className="relative z-10 max-w-6xl mx-auto p-6 backdrop-blur-sm 
        bg-white/90 dark:bg-gray-900/90 
        rounded-2xl shadow-lg transition-colors duration-500"
      >
        <Outlet />
      </main>

      {/* ✨ Footer */}
      <footer
        className={`text-center text-sm py-6 transition ${
          darkMode ? "text-gray-400" : "text-slate-500"
        }`}
      >
        APIForge — Fake API Generator
      </footer>
    </div>
  );
}
