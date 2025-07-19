"use client";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Loader } from "../utils/Loader";
import "../../styles/stars.css";

const Layout = (): React.JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // can tweak time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader
          messages={["Crafting Something Amazing", "Just a moment..."]}
          theme={theme}
        />
      ) : (
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
      )}
    </>
  );
};

export default Layout;
