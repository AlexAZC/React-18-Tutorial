import { useState } from "react";

const UseStateGotcha = () => {

  const [number,setNumber] = useState(0)

  const increasefunc = () => {
    setNumber(prevNumber => prevNumber + 1)
    console.log(number)
  }

  return (
    <div>
    <h2>{number}</h2>
    <button onClick={increasefunc} >Increase</button>
    </div>
  )
};

export default UseStateGotcha;
