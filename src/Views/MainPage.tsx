import { useRef } from "react";
import About from "../Components/About";
import Achievements from "../Components/Achievements";
import NavBar from "../Components/NavBar";
import Logo from "../Components/Logo";

function MainPage() {
  const canvasRef = useRef(null);

  return (
    <>
      <NavBar />
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 -mt-48"></canvas>
      <Logo canvasRef={canvasRef} />
      <div className="relative pl-24 w-6/12 z-10 mt-64">
        <div className="grid grid-cols-1">
          <About />
          <Achievements />
        </div>
      </div>
    </>
  );
}

export default MainPage;
