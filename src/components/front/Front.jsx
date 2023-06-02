import React, { useState, useEffect } from "react";
import "./front.css";
import { motion } from "framer-motion";
import frontart from "../../assets/art1.jpg";
import frontvideo from "../../assets/front-video.mp4";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import sound from "../../assets/music2.mp4";

const Front = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const [isPlaying, setIsPlaying] = useState(false); // Состояние для отслеживания состояния воспроизведения

  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full relative"
    >
      <video
        autoPlay
        loop
        muted
        // poster="https://assets.codepen.io/6093409/river.jpg"
        className="w-full h-[70vh] object-cover rounded-b-[150px] floating-image"
      >
        <source src={frontvideo} type="video/mp4" />
      </video>
      {/* <img
        src={frontart}
        alt="frontartImg"
        className="w-full h-[70vh] object-cover rounded-b-[150px] floating-image"
      /> */}
      <div className="bird"></div>
      <button
        className="btn-play player__btn-play player"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <img
            className="relative z-10 left-[-20%]"
            src={pause}
            alt="pauseImg"
          />
        ) : (
          <img className="relative z-10 left-[-20%]" src={play} alt="playImg" />
        )}
      </button>
      <div className="w-full max-w-[600px] m-auto h-full flex flex-col text-center text-slate-700 px-4 mt-12">
        <motion.h1
          className="font-medium text-base"
          custom={1}
          variants={textAnimation}
        >
          Құрметті ағайын-туыс, құда-жекжат, дос-жарандар!
        </motion.h1>
        <h2 className="font-medium text-xs my-5">
          Сіздерді ұлымыз бен келініміз
        </h2>
        <motion.h2
          className="text-3xl text-yellow-600 mb-8 font-vivaldi"
          custom={2}
          variants={textAnimation}
        >
          Ерасыл мен Нұржайна
        </motion.h2>
        <motion.p
          className="font-medium text-xs max-w-[280px] m-auto"
          custom={3}
          variants={textAnimation}
        >
          Шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі
          қонағы болуға шақырамыз
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Front;
