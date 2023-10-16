import { useState } from "react";

const ToggleChallenge = () => {

    const [bool,setBool] = useState(true)

    const togglerValue = () => setBool(!bool) ;
      
    

  return (<div>
      <button onClick={togglerValue}>Click Me</button>
      {bool ? <ConditionalRender name="Alexander" /> : null}
  </div>);
};

const ConditionalRender = ({name}) => {
  return (
    <h2>Is rendering and my name is {name} </h2>
  )
}

export default ToggleChallenge;
