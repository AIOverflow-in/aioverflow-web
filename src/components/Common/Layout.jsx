import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function Layout() {
  

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
