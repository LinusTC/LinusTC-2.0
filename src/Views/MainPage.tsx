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
      <motion.div
        initial={{ x: -925 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 12, delay: 1.5 }}
        className="relative pl-24 w-6/12 z-10 mt-64 grid grid-cols-1"
      >
        <About />
        <Achievements />
      </motion.div>
      <Contact />
    </>
  );
}

export default MainPage;
