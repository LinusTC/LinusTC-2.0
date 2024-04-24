import { motion } from "framer-motion";
import React from "react";

function Achievements() {
  const boxes = ["box 1", "box 2", "box 3", "box 4", "box 5"];

  return (
    <div>
      <p className="pb-2 text-white">Some of my latest achievements:</p>
      <div className="grid grid-cols-2 gap-8">
        {boxes.map((content, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white hover:cursor-pointer rounded-md h-36"
          >
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
