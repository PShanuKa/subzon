import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
