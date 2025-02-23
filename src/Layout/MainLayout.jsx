import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../Sections/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
