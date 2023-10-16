import { useState } from "react";


const ErrorExample = () => {

  const [count,setCount] = useState(0)

  const handleClick =  () => setCount(prevCount => prevCount + 1)

  return <div>
      <h2>add values for {count}</h2>
      <button type="button" className="btn" onClick={handleClick}>Add</button>
  </div>;
};

export default ErrorExample;
