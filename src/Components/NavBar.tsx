import {
  MotionValue,
  motion,
  useMotionValue,
} from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitch, FaYoutube } from "react-icons/fa";
import { IoIosContact, IoIosDocument } from "react-icons/io";

function NavBar() {
  type LinkItem = {
    name: string;
    url: string;
    target: string;
    icon: JSX.Element;
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
    { name: "Contact", url: "#", target: "_self", icon: <IoIosContact /> },

    { name: "CV", url: "/CV", target: "_blank", icon: <IoIosDocument /> },
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
    x.set(xRange * 30);
    y.set(yRange * 30);
  };

  return (
    <nav className="flex justify-center bg-white/30 backdrop-blur-md">
      <div className="w-6/12 py-4">
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
                  target="_blank"
                  to={link.url}
                  className="text-3xl rounded-md py-2 px-4 transition-all duration-500 hover:bg-colorE8E8E8 ease-out flex items-center gap-2"
                >
                  {link.icon} <motion.span>{link.name}</motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
