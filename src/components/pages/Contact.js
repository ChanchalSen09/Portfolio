var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactPage() {
    var _this = this;
    var _a = useState({
        name: "",
        email: "",
        message: "",
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState(false), globeReady = _b[0], setGlobeReady = _b[1];
    useEffect(function () {
        var timeout = setTimeout(function () { return setGlobeReady(true); }, 500);
        return function () { return clearTimeout(timeout); };
    }, []);
    var _c = useState("idle"), status = _c[0], setStatus = _c[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var validateEmail = function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    if (!formData.name.trim() ||
                        !formData.email.trim() ||
                        !formData.message.trim()) {
                        toast.error("Please enter valid details.");
                        setStatus("error");
                        return [2 /*return*/];
                    }
                    if (!validateEmail(formData.email)) {
                        toast.error(" Invalid email format.");
                        setStatus("error");
                        return [2 /*return*/];
                    }
                    setStatus("loading");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                case 2:
                    _b.sent();
                    setStatus("success");
                    toast.success(" Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    setStatus("error");
                    toast.error(" An error occurred. Try again!");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("section", { className: "min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-4 md:px-8", children: [_jsx(ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: true }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1 }, className: "w-full flex items-center justify-center mb-8 md:mb-0 md:w-1/2 rounded-full", children: _jsx("div", { className: "max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-full", children: globeReady && (_jsx(Globe, { pointsData: [
                            { lat: 22.729417, lng: 75.816722, name: "Indore, India" },
                        ], pointColor: function () { return "yellow"; }, pointAltitude: 0.0, pointRadius: 0.6, animateIn: true, globeImageUrl: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg", bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png", backgroundColor: "rgba(0,0,0,0)", width: 400, height: 400 })) }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "w-full max-w-xl bg-white p-6 md:p-8 rounded-lg shadow-lg", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-800 text-center", children: "Get in Touch" }), _jsx("p", { className: "text-gray-600 text-center mb-4 md:mb-6", children: "We'd love to hear from you! Drop us a message and we'll get back soon." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "name", placeholder: "Your Name", className: "w-full p-3 border rounded-lg text-sm md:text-base", onChange: handleChange, value: formData.name, required: true }), _jsx("input", { type: "email", name: "email", placeholder: "Your Email", className: "w-full p-3 border rounded-lg text-sm md:text-base", onChange: handleChange, value: formData.email, required: true }), _jsx("textarea", { name: "message", rows: 4, placeholder: "Your Message", className: "w-full p-3 border rounded-lg text-sm md:text-base", onChange: handleChange, value: formData.message, required: true }), _jsx("button", { type: "submit", className: "w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50", disabled: status === "loading", children: status === "loading" ? "Sending..." : "Send Message" })] })] })] }));
}
