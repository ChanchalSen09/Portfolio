import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Outlet";
import Landing from "../components/pages/Landing";
import Experience from "../components/pages/Experience";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </Router>
  );
}
