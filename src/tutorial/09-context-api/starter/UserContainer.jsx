import { useAppContext } from "./Navbar"


function UserContainer() {

  const {value,logOut} = useAppContext()

  return (
    <div className="user-container">
        <p>Hello there, {!value ? "please login" : value.name}</p>
        <button className="btn" onClick={logOut} >eliminar</button>
    </div>
  )
}
export default UserContainer