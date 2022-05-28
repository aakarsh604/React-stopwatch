import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css"

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + "h " + minutes + "m " + seconds + "s " + milliseconds;
  }

const Timer = () => {
  const [start, setStart] = useState(0);
  const [timer, settimer] = useState(0);
  console.log(timer);

  const handleStart = () => {
    settimer(start);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (timer <= 0) {
        clearInterval(id);
      } else {
        settimer((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  return (
    <div>
      <h1 className={styles.number}>{ `${timer}s` }</h1>
      <div className={styles.main}>
        <input
          onChange={(e) => setStart(+e.target.value)}
          type="Number"
          placeholder="Start"
        />
        <br />
        <br />
      </div>
     <button className={styles.btn} onClick={handleStart}>Start Timer</button>
    </div>
  );
};

export default Timer;
