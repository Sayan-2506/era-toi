import React from "react";
import { motion } from "framer-motion";
import insta from "../assets/insta.png";
import togis from "../assets/togis.png";

const Info = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };

  const buttonVibrations = {
    hidden: {
      x: 0,
      y: 0,
    },
    visible: (custom) => ({
      [custom === "x" ? "x" : "y"]: [-1, 1, -1, 1, 0],
      transition: { repeat: Infinity, repeatDelay: 2 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="m-auto mt-20 px-8 w-full max-w-[600px] h-full flex flex-col text-center text-slate-700"
    >
      <h3 className="text-base">Той иелері:</h3>
      <motion.h2
        custom={1}
        variants={textAnimation}
        className="text-2xl text-yellow-600 mb-5 font-vivaldi"
      >
        Бисенбай және Нұржамал
      </motion.h2>
      <motion.h2
        custom={2}
        variants={textAnimation}
        className="text-2xl text-yellow-600 font-snell"
      >
        13.07.2023
      </motion.h2>
      <h3 className="text-base uppercase mb-5">Сағат 18:00 да</h3>
      <motion.h2
        custom={3}
        variants={textAnimation}
        className="text-2xl text-yellow-600 font-snell"
      >
        Baq Sarai restaurant
      </motion.h2>
      <h3 className="text-base uppercase">Ақтөбе қаласы,Проспект Кенес Нокина, 42Б</h3>
      <div className="flex items-center justify-center gap-4 mt-5">
        <a
          href="https://www.instagram.com/baqsarai_aktobe/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <motion.img
            custom={"x"}
            variants={buttonVibrations}
            className="w-16 h-16"
            src={insta}
            alt="instaImg"
          />
        </a>

        <a
          href="https://2gis.kz/aktobe/directions/points/%7C57.18881%2C50.29944%3B70000001038229491"
          target="_blank"
          without
          rel="noreferrer"
        >
          <motion.img
            custom={"y"}
            variants={buttonVibrations}
            className="w-16 h-16"
            src={togis}
            alt="togisImg"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Info;
