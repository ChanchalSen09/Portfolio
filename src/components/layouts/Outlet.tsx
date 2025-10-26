"use client";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/stars.css";

const Layout = (): React.JSX.Element => {
  return (
    <>
      <div className="relative">
        {/* Background stars effect */}
        <div className="fixed inset-0 z-0 star-bg" />

        {/* App content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
