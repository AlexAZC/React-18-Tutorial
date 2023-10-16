import { Person } from './Person';
import { people } from "../../../data";

export default function List () {

    const displayPeople = people.map((person) => {
           return(
            <Person key={person.name} {...person} />
           ) 
    })
   
        return (
            <div>
                {displayPeople}
            </div>
        )

        } 
            
            


