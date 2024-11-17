import {Outlet } from "react-router-dom"
import Navbar from "./navbar"



function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
   
  )
}

export default App
