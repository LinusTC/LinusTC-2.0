import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { name: "Github", url: "https://github.com/LinusTC", target: "_blank" },
    { name: "CV", url: "/CV", target: "_blank" },
    { name: "Contact", url: "#", target: "_self" },
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
    x.set(xRange * 20);
    y.set(yRange * 20);
    console.log(xRange);
  };

  return (
    <div className="flex justify-center pt-8">
      <div className="w-6/12 py-4">
        <ul className="flex justify-center gap-12">
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const textX = useTransform(x, (latest) => latest * 0.5);
            const textY = useTransform(y, (latest) => latest * 0.5);
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                key={link.url}
                onPointerLeave={(event) => {
                    x.set(0),
                    y.set(0)
                }}
                style={{ x, y }}
              >
                <Link
                  to={link.url}
                  className="text-xl rounded-md py-2 px-4 transition-all duration-500 hover:bg-colorE8E8E8 ease-out"
                >
                  <motion.span>{link.name}</motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
