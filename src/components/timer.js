import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(540)

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert('Game ower')
    }})
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      <h2>Timer: {formatTime(timer)}</h2>
    </div>
  );
}

export default Timer;
