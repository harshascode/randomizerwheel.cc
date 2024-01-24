import React from "react";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
// import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Homepage />
      <Footer />
    </>
  );
};

export default layout;
