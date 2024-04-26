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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            className="bg-white hover:cursor-pointer rounded-md w-48% h-36"
          >
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
