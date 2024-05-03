import { MotionValue, motion, useMotionValue } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitch, FaYoutube, FaInstagram } from "react-icons/fa";

function NavBar() {
  type LinkItem = {
    name: string;
    url: string;
    target: string;
    icon?: JSX.Element;
  };

  const links: LinkItem[] = [
    {
      name: "Github",
      url: "https://github.com/LinusTC",
      target: "_blank",
      icon: <FaGithub />,
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/lifetc",
      target: "_blank",
      icon: <FaTwitch />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCwEr3Nj_phs5WSAQSN1RN-A",
      target: "_self",
      icon: <FaYoutube />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/linus_tc/",
      target: "_blank",
      icon: <FaInstagram />,
    },
    { name: "CV", url: "/CV", target: "_blank" },
  ];

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 50);
    y.set(yRange * 50);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 12, delay: 1.5}}
      className="flex justify-center top-0 sticky z-40 bg-black/10 backdrop-blur-lg"
    >
      <div className="my-2">
        <ul className="flex justify-center gap-12">
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                key={link.url}
                onPointerLeave={() => {
                  x.set(0), y.set(0);
                }}
                style={{ x, y }}
              >
                <Link
                  target={link.target}
                  to={link.url}
                  className="text-2xl text-white my-2 mx-4 flex items-center gap-2 hover:underline"
                >
                  {link.icon} <motion.span>{link.name}</motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
