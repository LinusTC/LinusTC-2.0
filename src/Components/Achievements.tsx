import Card from "./AchievementComponents/Card";
import { motion } from "framer-motion";
import TickBox from "../Assets/TickBox.png";
import PlaneGlobe from "../Assets/Planeglobe.png";

export default function MainSection() {
  const cardData = [
    {
      title: "TickBox",
      photoSource: TickBox,
      videoSource:
        "https://www.youtube.com/embed/I8zTqKyKqe4?autoplay=1&loop=1&playlist=I8zTqKyKqe4",
      isVideo: true,
      description: (
        <>
          <p className="pb-2">
            This is TickBox, a demo product my colleagues and I built that
            combines a phone lock box and a web application aimed to help users
            minimize phone distractions.
          </p>
          <p className="pb-2">
            During the project, I was mainly in charge of designing and
            implementing the TickBox web application. Following agile
            development methodologies such as the Factory Design Pattern, we
            were able create demo-ready web application within a short timeframe.
          </p>
          <p className="pb-2">
            I was also tasked with creating a backend server and database to
            store user data for TickBox. As shown in the video, we were able to
            create a database storing user login details, friends data, to-do
            lists etc.
          </p>
        </>
      ),
    },
    {
      title: "PizzaDronz",
      photoSource: "https://placehold.co/1920x1080",
      videoSource: "https://www.youtube.com/embed/I8zTqKyKqe4?rel=0?autoplay=1",
      isVideo: false,
      description: <div>Hello</div>,
    },
    {
      title: "PlaneGlobe",
      photoSource: PlaneGlobe,
      videoSource:
        "https://www.youtube.com/embed/l10cf8hbagM?autoplay=1&loop=1&playlist=l10cf8hbagM",
      isVideo: true,
      description: (
        <>
          <p className="pb-2">
            Using Three.js, I developed a 3D representation of flights around
            the world. I Learned to use mathematical functions to convert
            Longitude Latitude airport coordinates to XYZ on globe and used
            Euler angles to represent rotations of planes around the globe.
          </p>
          <p>
            Try it Yourself:
            <a
              target="_blank"
              href="https://planeglobe.linustc.com/"
              className="underline"
            >
              Here
            </a>
          </p>
        </>
      ),
    },
  ].map((cardObj, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={cardObj.title}
        photoSource={cardObj.photoSource}
        videoSource={cardObj.videoSource}
        isVideo={cardObj.isVideo}
        description={cardObj.description}
      />
    );
  });

  return (
    <>
      <p className="pb-2 text-white text-lg">Some of my latest achievements:</p>
      <motion.div
        className="grid grid-cols-2 gap-[2%]"
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
