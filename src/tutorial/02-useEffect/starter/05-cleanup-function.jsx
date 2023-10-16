
import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [value, setValue] = useState(true)

  const toggleClick = () => {
    setValue(!value)
  }

  return (
    <div>
    <button className="btn" onClick={toggleClick} >Toggler</button>
    {value && <RandomComponent /> }
    </div>
  );
};

const RandomComponent = () => {

      useEffect(() => {
          const someFunc = () =>{
              log("Something")
          }
          window.addEventListener("scroll",someFunc);
          return () => window.removeEventListener("scroll",someFunc)
      },[])

      return <h1>Hello there</h1>

}

export default CleanupFunction;
