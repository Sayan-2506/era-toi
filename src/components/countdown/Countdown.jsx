import React from "react";
import "./countdown.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "moment/locale/tr";
import Clock from "react-live-clock";
import "moment-timezone";
import "react-moment";
import { motion } from "framer-motion";
const minuteSeconds = 60;
const hourSeconds = minuteSeconds * 60;
const daySeconds = hourSeconds * 24;

const timerProps = {
  isPlaying: true,
  size: 90,
  strokeWidth: 6
};

const renderTime = (time) => {
  return (
    <div className="time-wrapper">
      <div className="title time">{time}</div>
    </div>
  );
};

const getTimeSeconds = (time) => Math.ceil(minuteSeconds - time) - 1;
const getTimeMinutes = (time) => Math.ceil(time / minuteSeconds) - 1;
const getTimeHours = (time) => Math.ceil(time / hourSeconds) - 1;
const getTimeDays = (time) => Math.ceil(time / daySeconds) - 1;



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


export default function CountDown() {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 3561060; // use UNIX timestamp in seconds
  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-auto mt-20 px-8 w-full max-w-[600px] h-full flex flex-col text-center text-slate-700"
      >
        <motion.h3
          custom={1}
          variants={textAnimation}
          className="text-base font-medium mb-6"
        >
          Тойдың басталуына:
        </motion.h3>
        <div className="countdown-wrapper">
          {daysDuration && (
            <div className="countdown-item">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeDays(daysDuration - elapsedTime))
              }
            </CountdownCircleTimer>
              <span>күн</span>
            </div>
          )}
          {daySeconds && (
            <div className="countdown-item">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > hourSeconds
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeHours(daySeconds - elapsedTime))
              }
            </CountdownCircleTimer>
              <span>сағат</span>
            </div>
          )}
          {hourSeconds && (
            <div className="countdown-item">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
              <span>минут</span>
            </div>
          )}
          {minuteSeconds && (
            <div className="countdown-item">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) => renderTime(getTimeSeconds(elapsedTime))}
            </CountdownCircleTimer>
              <span>секунд</span>
            </div>
          )}
        </div>
      </motion.div>
  )

  return (
    <section className="countdown">
      <div className="to-calendar">
        <h3 className="title r-time">
          <Clock
            ticking={true}
            timezone={"Asia/Almaty"}
            format={" DD MMMM YYYY, HH:mm"}
          />
        </h3>
      </div>

      <div className="all-times-bar">
        <div className="timebox">
          <div className="day mr-12">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeDays(daysDuration - elapsedTime))
              }
            </CountdownCircleTimer>
          </div>
          <h3 className="title">days</h3>
        </div>
        <div className="timebox">
          <div className="hours mr-12">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > hourSeconds
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeHours(daySeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </div>
          <h3 className="title">hours</h3>
        </div>
        <div className="timebox">
          <div className="minutes mr-12">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) =>
                renderTime(getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </div>
          <h3 className="title">minutes</h3>
        </div>
        <div className="timebox">
          <div className="seconds mr-12">
            <CountdownCircleTimer
              {...timerProps}
              colors={[
                ["#9000ff", 0],
                ["#0066FF", 1]
              ]}
              isLinearGradient={true}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0
              ]}
              trailColor={[["#dbdbdb"]]}
            >
              {({ elapsedTime }) => renderTime(getTimeSeconds(elapsedTime))}
            </CountdownCircleTimer>
          </div>
          <h3 className="title">seconds</h3>
        </div>
      </div>
    </section>
  );
}
