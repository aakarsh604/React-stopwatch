import React, { useState } from 'react'
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

const Stopwatch = () => {
    const [watch, setwatch] = useState(0);
    const [timerID, settimerID] = useState(false);

    const start = () => {
        //Basically saying execute this only if the timer id doesnt exist, this will avoid starting the stopwatch once its already started
      if(!timerID){
        let id = setInterval(() => {
            setwatch((prev) => prev+10)
        },10);
        settimerID(id);
      }
    };
    const pause = () => {
        clearInterval(timerID);
        settimerID(false);
    };
    const reset = () => {
        clearInterval(timerID);
        settimerID(false);
        setwatch(0);
    };

  return (
    <div>
    <h1 className={styles.number}>{msToTime(watch)}</h1>
    <div className={styles.btndiv}>
    <button className={`${styles.btn} ${styles.btn1}` } onClick={start}>Start</button>
    <button className={`${styles.btn} ${styles.btn2}` } onClick={pause}>Pause</button>
    <button className={`${styles.btn} ${styles.btn3}` } onClick={reset}>Reset</button>
    </div>
    </div>
  )
}

export default Stopwatch