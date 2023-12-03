import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
