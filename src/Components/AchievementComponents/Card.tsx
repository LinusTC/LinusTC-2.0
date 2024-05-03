import styled, { css } from "styled-components";
import { MotionProps, motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";

interface CardProps {
  title: string;
  src: string;
}

interface CardLinkProps extends MotionProps {
  isCardOpened: boolean;
}

const CardLink = styled(motion.div)<CardLinkProps>`
  height: 100%;
  width: 100%;
  ${(props) =>
    props.isCardOpened &&
    css`
      width: min(50rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    `}
`;

function Card({ title, src }: CardProps) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef<HTMLDivElement>(null);
  return (
    <Fragment>
      <CardLink
        ref={card}
        isCardOpened={isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened && card.current) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
        whileHover={!isCardOpened ? { scale: 1.05 } : {}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        style={{ cursor: isCardOpened ? 'auto' : 'pointer' }}
      >
        <motion.img layout src={src} className="h-auto w-full" />
        <motion.h2
          layout="position"
          className={`text-white ${(isCardOpened)? "text-5xl" : "text-lg"}`}
        >
          {title}
        </motion.h2>

        {isCardOpened && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-thin text-white text-2xl"
          >
            Yessir
          </motion.p>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <motion.div
            className="fixed inset-0 h-screen w-screen bg-[rgba(10,10,10,0.7)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

export default Card;