import About from "../Components/About";
import Achievements from "../Components/Achievements";
import Model from "../Components/Model";
import NavBar from "../Components/NavBar";

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 px-24 gap-8">
        <div className="grid grid-cols-1">
          <About />
          <Achievements />
        </div>
        <Model />
      </div>
    </>
  );
}

export default MainPage;
