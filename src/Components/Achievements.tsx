import Card from "./AchievementComponents/Card";
import { motion } from "framer-motion";
import TickBox from "../Assets/TickBox.png";
import PlaneGlobe from "../Assets/Planeglobe.png";


export default function MainSection() {
  const cardData = [
    {
      title: "TickBox",
      photoSource: TickBox,
      videoSource: "https://www.youtube.com/embed/I8zTqKyKqe4?autoplay=1",
      description: "Hello",
    },
    {
      title: "PlaneGlobe",
      photoSource: PlaneGlobe,
      videoSource: "https://www.youtube.com/embed/m0mJknaS3p0?autoplay=1",
      description: "Hello",
    },
    {
      title: "Item3",
      photoSource: "https://placehold.co/1920x1080",
      videoSource: "https://www.youtube.com/embed/I8zTqKyKqe4?rel=0?autoplay=1",
      description: "Hello",
    },
  ].map((cardObj, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={cardObj.title}
        photoSource={cardObj.photoSource}
        videoSource={cardObj.videoSource}
        description={cardObj.description}
      />
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
