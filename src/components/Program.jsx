import React from "react";
import { motion } from "framer-motion";
import waiting from "../assets/waiting-list.svg";
import bride from "../assets/bride.svg";
import weddingArch from "../assets/wedding-arch.svg";
import walth from "../assets/walth.svg";
import dance from "../assets/dance-woman.svg";

const Program = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="m-auto mt-20 px-8 w-full max-w-[600px] h-full flex flex-col text-center text-slate-700"
    >
      <h3 className="text-base font-medium mb-6">Той бағдарламасы:</h3>
      <ul>
        <motion.li
          custom={1}
          variants={textAnimation}
          className="flex items-center gap-4 mb-8"
        >
          <img className="w-16 h-16" src={waiting} alt="waitingImg" />
          <div className="text-left">
            <p>18:00</p>
            <p>Қонақтардың жиналуы</p>
          </div>
        </motion.li>
        <motion.li
          custom={2}
          variants={textAnimation}
          className="flex items-center gap-4 mb-8"
        >
          <img className="w-16 h-16" src={bride} alt="brideImg" />
          <div className="text-left">
            <p>19:00</p>
            <p>Беташар</p>
          </div>
        </motion.li>
        <motion.li
          custom={3}
          variants={textAnimation}
          className="flex items-center gap-4 mb-8"
        >
          <img className="w-16 h-16" src={weddingArch} alt="weddingArchImg" />
          <div className="text-left">
            <p>20:00</p>
            <p>Құда қарсы алу</p>
          </div>
        </motion.li>
        <motion.li
          custom={4}
          variants={textAnimation}
          className="flex items-center gap-4 mb-8"
        >
          <img className="w-16 h-16" src={walth} alt="walthImg" />
          <div className="text-left">
            <p>22:00</p>
            <p>Күйеу жігіт пен қалындық вальсі</p>
          </div>
        </motion.li>
        <motion.li
          custom={6}
          variants={textAnimation}
          className="flex items-center gap-4"
        >
          <img className="w-16 h-16" src={dance} alt="danceImg" />
          <div className="text-left">
            <p>24:00</p>
            <p>Музыкалық би, шоу программа</p>
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Program;
