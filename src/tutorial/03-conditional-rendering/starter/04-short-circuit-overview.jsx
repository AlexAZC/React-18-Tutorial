import { useState } from 'react';


const ShortCircuitOverview = () => {

  const [falsy,setFalsy] = useState(0)
  const [truthy,setTruthy] = useState("Verdadero")

  return <div>
      <h4>Falsy OR: {falsy || "hello world"}</h4>
      <h4>Falsy AND: {falsy && "hello world"}</h4>
      <h4>Falsy OR: {truthy || "hello world"}</h4>
      <h4>Falsy AND: {truthy && "hello world"}</h4>
  </div>;
};
export default ShortCircuitOverview;
