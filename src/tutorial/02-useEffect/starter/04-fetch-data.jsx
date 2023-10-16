const url = 'https://api.github.com/users';
import { useEffect, useState } from "react";


const FetchData = () => {
  
  const [users, setUsers] = useState([])

useEffect(() => {
  fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      console.log(users)
}, [])

const displayUsers = users.map((user) => {
    const {id,login,avatar_url, html_url} = user
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
          </div>
        </li>
      )
})



  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
          {displayUsers}
      </ul>
    </section>
  )
};
export default FetchData;
