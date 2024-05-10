import About from "../Components/About";
import Achievements from "../Components/Achievements";
import NavBar from "../Components/NavBar";
import Logo from "../Components/Logo";
import { motion } from "framer-motion";
import Contact from "../Components/Contact";

function MainPage() {
  return (
    <>
      <NavBar /> 
      <Logo />
      <div className="absolute top-15 text-white"> Preview of whats to comes</div>
      <motion.div
        initial={{ x: -952 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 12, delay: 1.5 }}
        className="relative pl-24 w-6/12 mt-64 grid grid-cols-1"
      >
        <About />
        <Achievements />
      </motion.div>
      <Contact/>
    </>
  );
}

export default MainPage;

// Z indexes
// NavBar 40
// Logo 0
// About 30
// Achievements closed 30, open 50
// Contact 30