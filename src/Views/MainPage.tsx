import { useRef } from "react";
import About from "../Components/About";
import Achievements from "../Components/Achievements";
import Model from "../Components/Model";
import NavBar from "../Components/NavBar";
import Logo from "../Components/Logo";

function MainPage() {

  return (
    <>
      <NavBar />
      <Logo/>
      <Model/>
      <div className="pl-24 w-6/12 z-10">
        <div className="grid grid-cols-1">
          <About />
          <Achievements />
        </div>
      </div>
    </>
  );
}

export default MainPage;
