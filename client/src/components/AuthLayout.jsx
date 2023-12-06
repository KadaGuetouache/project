import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
