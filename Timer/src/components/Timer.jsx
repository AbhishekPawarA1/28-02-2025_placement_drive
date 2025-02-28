import { useEffect } from "react";
import { useRef, useState } from "react"

export function Timer() {

    let [time, setTime] = useState(0)
    let [isrunnig,setIsRunnig]=useState(false)
  let ref = useRef(null)
  
    
    function handleStart() {
        if (!ref.current && time==0) {
            ref.current = setInterval(() => {
              setTime((pre) => pre + 10);
            }, 10);
            setIsRunnig(true)
        }
    }
    function handlePause() {
        clearInterval(ref.current)
        ref.current = null;
        setIsRunnig(false)
    }

    function handleReset() {
        setTime(0)
        clearInterval(ref.current)
        setIsRunnig(false)
        ref.current=null
    }

    function handleResume() {
        if (!ref.current && time>0) {
          ref.current = setInterval(() => {
            setTime((pre) => pre + 10);
          }, 10);
            setIsRunnig(true);
        }
  }
  
  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);


    let hr = Math.floor(time / 3600000)
    let min = Math.floor((time % 3600000) / 60000)
    let sec = Math.floor((time % 60000) / 1000)
    let ml=Math.floor((time % 1000)/10)

    return (
      <>
        <h1>
          {String(hr).padStart(2, "0")}:{String(min).padStart(2, "0")}:
          {String(sec).padStart(2, "0")}:{String(ml).padStart(2, "0")}
        </h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={isrunnig ? handlePause : handleResume}>
          {isrunnig ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </>
    );
}