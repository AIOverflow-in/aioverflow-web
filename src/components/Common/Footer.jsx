import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex justify-center items-center text-white gap-2"
          >
            <img
              className="w-8 h-7 md:h-6 "
              src="https://drive.google.com/uc?export=view&id=1KpS4DhI5wWcvXPQxDZsr8-mth7y0Cz84"
            ></img>
            <span className="text-3xl font-bold">Overflow</span>
          </Link>

          <p className="mt-4 text-center text-sm text-gray-300 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
