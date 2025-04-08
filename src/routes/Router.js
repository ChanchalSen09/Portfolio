import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Outlet";
import Landing from "../components/pages/Landing";
import Experience from "../components/pages/Experience";
export default function Routers() {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Landing, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) })] }) }) }));
}
