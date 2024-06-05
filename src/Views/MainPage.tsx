import About from "../Components/About";
import Achievements from "../Components/Achievements";
import NavBar from "../Components/NavBar";
import Logo from "../Components/Logo";
import { motion } from "framer-motion";
import Contact from "../Components/Contact";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function MainPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color="white"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <NavBar />
          <Logo />
          <motion.div
            initial={{ x: -952 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 12, delay: 1.5 }}
            className="relative w-[50%] pl-[6%] mt-[15%] grid grid-cols-1"
          >
            <About />
            <Achievements />
          </motion.div>
          <Contact />
        </>
      )}
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
