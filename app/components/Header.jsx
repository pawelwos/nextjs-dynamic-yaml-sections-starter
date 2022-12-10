'use client';

import { useState } from "react"
import Navigation from './Navigation'

const Header = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
    {
      isOpen && (
        <div className="fixed z-50 w-full inset-0 min-h-screen text-white bg-slate-600 bg-opacity-80 flex items-center justify-center">
          <button onClick={()=>{setOpen(!isOpen)}} className="block absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Navigation type="mobile" />
        </div>
      )
    }

    <section className="top p-4 fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          Logo
        </div>
        <div className="w-1/2 hidden md:block">
          <Navigation />
        </div>
        { !isOpen && (
        <div className="w-1/2 md:hidden text-right">
          <button className="block ml-auto" onClick={()=>{setOpen(!isOpen)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
        </div>
        )}
      </div>
    </section>
    </>
  )
}

export default Header