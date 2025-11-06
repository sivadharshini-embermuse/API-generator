import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App(){
  console.log("Backend URL is:", import.meta.env.VITE_BACKEND_URL);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
      <footer className="text-center text-sm text-slate-500 py-6">APIForge — Fake API generator</footer>
    </div>
  )
}

