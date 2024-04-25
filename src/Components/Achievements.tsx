import { motion } from "framer-motion";

function Achievements() {
  const boxes = ["box 1", "box 2", "box 3", "box 4", "box 5", "box 6", "box 7"];

  return (
    <div>
      <p className="pb-2 text-white text-lg">Some of my latest achievements:</p>
      <div className="flex flex-wrap gap-6">
        {boxes.map((content, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white hover:cursor-pointer rounded-md w-414px h-36"
          >
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
