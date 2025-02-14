import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (): React.JSX.Element => {
  return (
    <>
      <div className="">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};
export default Layout;
