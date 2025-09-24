import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "./containers/HomeContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  return (
    <>
      <HomeContainer />
      <FooterContainer />
    </>
  );
}

export default App;