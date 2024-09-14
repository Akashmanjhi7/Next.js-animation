'use client'

import React from 'react'

const CreativeButton = () => {
  return (
    <div className="flex flex-col items-center space-y-8 py-10 bg-zinc-950 h-screen">
    {/* Button 1 */}
    <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-zinc-600 transition duration-300 ease-out border-2 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-zinc-100 duration-300 -translate-x-full rounded-full bg-zinc-600 group-hover:translate-x-0 ease">
        About us →
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-zinc-600 transition-all duration-300 transform group-hover:translate-x-full ease">
       ● About us
      </span>
      <span className="relative invisible">Button 1</span>
    </button>

    {/* Button 2 */}
    <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 bg-indigo-600 group-hover:translate-x-full ease">
        Button 2
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        Button 2
      </span>
      <span className="relative invisible">Button 2</span>
    </button>

    {/* Button 3 */}
    <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 bg-indigo-600 rounded-full group-hover:translate-y-0 translate-y-full ease">
        Button 3
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform translate-y-0 group-hover:translate-y-full ease">
        Button 3
      </span>
      <span className="relative invisible">Button 3</span>
    </button>
  </div>
  )
}

export default CreativeButton
