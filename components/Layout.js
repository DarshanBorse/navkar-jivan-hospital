import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-brandLightColor overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
