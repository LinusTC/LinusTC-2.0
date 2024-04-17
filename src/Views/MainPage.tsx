import Achievements from "../Components/Achievements";
import Model from "../Components/Model";
import NavBar from "../Components/NavBar";

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center gap-4">
        <Achievements />
        <Model />
      </div>
    </>
  );
}

export default MainPage;
