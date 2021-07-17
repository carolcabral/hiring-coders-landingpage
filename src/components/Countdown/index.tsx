import React, { useState } from "react";
import "./Countdown.css";

const TARGET_DATE = new Date("2021-11-26").toISOString();
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;

const parseTimeRemaining = (totalSeconds: number): TimeSplit => {
  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  );
  const seconds = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE
  );
  return {
    hours: fillWithZero(2, hours),
    minutes: fillWithZero(2, minutes),
    seconds: fillWithZero(2, seconds),
  };
};

const fillWithZero = (digits: number, number: number): string => {
  const filled = "0".repeat(digits - 1) + number;
  return filled.slice(filled.length - digits);
};

const tick = (
  targetDate: string,
  dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>>
) => {
  const ONE_SECOND_IN_MILLIS = 1000;
  let finalDate = new Date(targetDate);
  let now = new Date();

  let secondsLeft =
    (finalDate.getTime() - now.getTime()) / ONE_SECOND_IN_MILLIS;

  setTimeout(() => {
    dispatchFn(parseTimeRemaining(secondsLeft));
  }, ONE_SECOND_IN_MILLIS);
};

interface TimeSplit {
  hours: string;
  minutes: string;
  seconds: string;
}

const Countdown = ({}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  tick(TARGET_DATE, setTime);

  return (
    <>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          XX
          <span>days</span>
        </div>

        <div className="countdown-item">
          {timeRemaining.hours}
          <span>hours</span>
        </div>

        <div className="countdown-item">
          {timeRemaining.minutes}
          <span>minutes</span>
        </div>

        <div className="countdown-item">
          {timeRemaining.seconds}
          <span>seconds</span>
        </div>
      </div>
    </>
  );
};

export default Countdown;
