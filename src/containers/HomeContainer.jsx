import React from "react";
import MainLayout from "../layouts/MainLayout";
import brandLogo from "/assets/brand-logo-low.png";

const HomeContainer = () => {
  return (
    <div className="px-4 py-5 my-5 text-center" style={{ display: "flex" }}>
      <div>
        <img src={brandLogo} style={{ height: 100, widht: 100 }} />
      </div>
      <h1 className="display-5 text-body-emphasis poppins-semibold">
        Prepare exciting materials
      </h1>
      {/* <p className="lead mb-4">convert web pages</p> */}
      <MainLayout />
    </div>
  );
};

export default HomeContainer;
