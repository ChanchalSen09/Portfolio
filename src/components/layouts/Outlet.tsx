"use client";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Loader } from "../utils/Loader";

const Layout = (): React.JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {loading ? (
        <Loader
          messages={[
            "Welcome to My Awesome Portfolio!",
            "Crafting Something Amazing",
            "Just a moment...",
          ]}
          theme={"dark"}
        />
      ) : (
        <div
          className={
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900"
          }>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
