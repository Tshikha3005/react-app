import React, { FC, useRef, useState } from "react";

export const StopWatch: FC = () => {
  const [time, setTime] = useState<number>(0);
  // useRef is used to store a mutable value that does not cause a re-render when updated. In this case, we use it to store the timer ID returned by setInterval, allowing us to start and stop the timer without triggering unnecessary re-renders of the component.
  const timer = useRef(0);
  const start = () => {
    if (timer.current !== 0) return;
    timer.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const stop = () => {
    if (timer.current === 0) return;
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = 0;
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <h1>Start/Stop watch</h1>
      <p>{time}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
