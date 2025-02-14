import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
var Layout = function () {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "", children: [_jsx(Navbar, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }) }));
};
export default Layout;
