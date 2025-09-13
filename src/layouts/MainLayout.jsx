import React from "react";
import Button from "../components/Button";

const MainLayout = () => {
  return (
    <div className="h-100 p-5 text-bg-dark rounded-3">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button isConvert={true} btnName={"Convert"} />
        <Button btnName={"Settings"} />
      </div>
    </div>
  );
};

export default MainLayout;
