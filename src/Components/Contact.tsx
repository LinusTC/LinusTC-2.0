import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosContact } from "react-icons/io";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 12, delay: 1.5 }}
      className="fixed bottom-0 right-0 m-4 z-30"
      ref={wrapperRef}
    >
      <motion.div
        layout
        className="bg-white p-3 shadow-lg"
        style={{ borderRadius: "1rem" }}
      >
        <motion.h2
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl flex items-center cursor-pointer"
        >
          <IoIosContact /> Contact
        </motion.h2>
        {isOpen && (
          <motion.div layout="position">
            <p>Email: tongchun03@gmail.com</p>
            <p>Instagram: linus_tc</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;
