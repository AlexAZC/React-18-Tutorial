import { useState } from 'react';






const UseStateObject = () => {

  const [guy,setGuy] = useState({name:"Alex",
  age:25,
  hobby:"Enjoys: Play videogames"})

  

  const randomGuy = () => {
    setGuy({...guy ,age:12,hobby:"coding css"})
  }
  
  return <div>
    <h2>{guy.name}</h2>
    <h2>{guy.age}</h2>
    <h2>{guy.hobby}</h2>
    <button className="btn" onClick={randomGuy}>Show Random</button>
  </div>;
};

export default UseStateObject;
