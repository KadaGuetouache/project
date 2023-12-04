import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
