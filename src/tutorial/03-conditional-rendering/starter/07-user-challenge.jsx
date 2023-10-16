import { useState } from "react";


const UserChallenge = () => {
    const [user,setUser] = useState(null);

    const login = () => setUser({name:"Alex"});
    const logout = () => setUser(null)

    
  return (
      <div>
        <h4>{user ? `Hello there, ${user.name}` : "Please login"}</h4>
        <button className="btn" onClick={user ? logout : login}>{user ? "logout" : "login"}</button>
      </div>
  )
  
  
};

export default UserChallenge;
