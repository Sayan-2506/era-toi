import React from "react";
import { motion } from "framer-motion";
import suit from "../assets/suit.svg";

const DresCode = () => {

  const male = "Классикалық костюм";
  const female = "Көркем, сәнді той көйлегі";

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08 * custom,
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.8, once: true }}
      className="m-auto mt-20 px-8 w-full max-w-[600px] h-full flex flex-col text-center text-slate-700"
    >
      <div className="mb-3">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-16 h-16 m-auto mb-3"
          src={suit}
          alt="suitImage"
        />
        <h3 className="mb-2 font-bold">Дресс код</h3>
        <p>
          Дресс код біздің тойға сәйкес киім-кешек таңдап, мереке дресс-кодын
          ұстансаңыз, риза боламыз
        </p>
      </div>
      <div className="mb-3">
        <h3 className="font-bold">Ерлер:</h3>
        <motion.p custom={1} variants={textVariants}>
        {male.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        </motion.p>
      </div>
      <div>
        <h3 className="font-bold">Кыз-келіншектер, апа-аналар:</h3>
        <motion.p custom={2} variants={textVariants}>
        {female.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DresCode;
