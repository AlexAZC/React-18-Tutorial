import { createContext, useState } from "react"
import NavLinks from "./NavLinks"
import { useContext } from "react"

export const NavbarContext = createContext()

// Custom Hook

export const useAppContext = () => useContext(NavbarContext)

function Navbar() {

    const [value,setValue] = useState({name:"something"})

    const logOut = () => {
        return setValue(null)
    }
    const values = {value, logOut}
  return (
    <NavbarContext.Provider value={values} >

    <nav className="navbar" >
        <h5>CONTEXT API</h5>
        <NavLinks />
    </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar