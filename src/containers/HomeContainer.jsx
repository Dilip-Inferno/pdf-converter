import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import brandLogo from "/assets/brand-logo-low.png";
import { defaultTemplate } from "../templates/DefaultTemplate";

const HomeContainer = () => {
  const [html, setHtml] = useState(defaultTemplate);
  return (
    <div
      className="px-4 py-5 my-5 text-center"
      style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
    >
      <div>
        <img src={brandLogo} style={{ height: 100, widht: 100 }} />
      </div>
      <h1 className="display-5 text-body-emphasis poppins-semibold">
        Prepare exciting materials
      </h1>
      <textarea
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        className="w-full mt-3 p-2"
        rows={6}
        placeholder="Paste or edit HTML here..."
      />
      {/* <p className="lead mb-4">convert web pages</p> */}
      <MainLayout htmlTextArea={html} />
    </div>
  );
};

export default HomeContainer;
