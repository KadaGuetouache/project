import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={ { minHeight: "100%" } }>
      <Announcement />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
