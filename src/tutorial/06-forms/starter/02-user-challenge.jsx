import { useState } from "react";
import {data} from "../../../data"


const UserChallenge = () => {

    const [users, setUsers] = useState(data)
    const [name,setName] = useState("")

    const handleSubmit = (e) => {

        if(!name) return;
        e.preventDefault();
        /*const fakeId = Date.now();
        const newUser = {id:fakeId,name}
        const updatedUsers = [...users,newUser]
        setUsers(updatedUsers);*/
        setUsers([...users, {id:users.length + 1, name: name} ])
        setName("");
        console.log(users)
    }

    const removeUser = (id) => {
        const removed = users.filter((person) => person.id !== id);
        setUsers(removed);
    }

    const displayData = users.map((user) => {
          return (
            <div>
              <h4 key={user.id}>{user.name}</h4>
              <button onClick={() => removeUser(user.id)} className="btn" >Remove</button>
            </div>
          )
    })

  return (
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}  className='form-input' id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Users</h2>
      {displayData}
      
    </div>
  );
};
export default UserChallenge;
