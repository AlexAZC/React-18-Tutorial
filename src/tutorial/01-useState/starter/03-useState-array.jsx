
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  
    const [people, setPeople] = useState(data)

    const removeOneItem = (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople)
    };
    const removeAllItems = () => {
      setPeople([])
    };

    

   
    const displayData = people.map((people) => {
      const{id,name} = people
     
      return(
        <li key={id}>
          <h2>{name}</h2>
          <button className="btn" onClick={() => removeOneItem(id)}  >remove</button>
        </li>
        
      )
    })


  return (
    <div>
      <ul>
          {displayData}
          <button className="btn" onClick={removeAllItems} >CLEAR ITEMS</button>
      </ul>
    </div>
  );
};

export default UseStateArray;
