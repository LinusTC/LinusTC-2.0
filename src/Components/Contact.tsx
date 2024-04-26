import { motion } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      className="text-white"
    >
      Contact
    </motion.div>
  );
}

export default Contact;
