import Card from "./AchievementComponents/Card";
import { motion } from "framer-motion";

export default function MainSection() {
  const cardData = [
    {
      title: "Item1",
      src: "https://placehold.co/1920x1080",
    },
    {
      title: "Item2",
      src: "https://placehold.co/1920x1080",
    },
    {
      title: "Item3",
      src: "https://placehold.co/1920x1080",
    },
  ].map((cardObj, index) => {
    return (
      <Card key={`card-${index}`} title={cardObj.title} src={cardObj.src} />
    );
  });

  return (
    <>
      <p className="pb-2 text-white text-lg">Some of my latest achievements:</p>
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
      >
        {cardData}
      </motion.div>
    </>
  );
}
