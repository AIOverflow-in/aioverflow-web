import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container relative flex items-center justify-between px-6 py-8 mx-auto text-white">
      <Link to="/" className="flex gap-2 items-center">
        <img
          className="w-8 h-7 md:h-6"
          src="https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/logo_for_website%2FAI_Logo-.png?alt=media&token=702a24fb-69f7-4b03-b1bd-6b51e9907cb9"
        ></img>
        <span className="text-2xl font-bold">Overflow</span>
      </Link>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        <span style={{ display: !open ? "inline" : "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </span>

        <span style={{ display: open ? "inline" : "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        className={`absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 mx-auto space-y-6 transition-all duration-300 ease-in-out bg-gray-900
         top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center ${
           open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
         }`}
      >
        <Link
          to="/"
          className="block text-white transition-colors duration-300 md:px-6 hover:text-prim font-medium"
        >
          Home
        </Link>

        <Link
          to="/contact"
          className="block text-white transition-colors duration-300 md:px-6 hover:text-prim font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
