import React from 'react'

export default function Navbar(){
  return (
    <nav className="bg-dark shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">APIForge</div>
          <div className="text-sm text-slate-500">Fake API generator</div>
        </div>
      </div>
    </nav>
  )
}
