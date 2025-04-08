"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Loader } from "../utils/Loader";
var Layout = function () {
    var _a = useState(true), loading = _a[0], setLoading = _a[1];
    var _b = useState("light"), theme = _b[0], setTheme = _b[1];
    useEffect(function () {
        setTimeout(function () { return setLoading(false); }, 500);
    }, []);
    // Toggle Dark/Light Mode
    var toggleTheme = function () {
        setTheme(function (prev) { return (prev === "light" ? "dark" : "light"); });
    };
    return (_jsx(_Fragment, { children: loading ? (_jsx(Loader, { messages: [
                "Welcome to My Awesome Portfolio!",
                "Crafting Something Amazing",
                "Just a moment...",
            ], theme: "dark" })) : (_jsxs("div", { className: theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900", children: [_jsx(Navbar, {}), _jsx(Outlet, {}), _jsx(Footer, {})] })) }));
};
export default Layout;
