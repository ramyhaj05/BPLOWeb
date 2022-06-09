import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  const [home, setHome] = useState(" text-pink-400 font-bold")
  const [about, setAbout] = useState("")
  const [services, setServices] = useState("")
  const [contact, setContact] = useState("")
  const navButton = "font-sans px-2 text-gray-400 text-xl transition transform hover:-translate-y-1 hover:bg-pink-400 hover:text-white rounded-sm"
  const handleActive = (page) =>{
    setHome("")
    setAbout("")
    setServices("")
    setContact("")
    const activePage = " text-pink-400 font-bold"
    if(page === "home"){
      setHome(activePage)
    }
    else if(page === "about"){
      setAbout(activePage)
    }
    else if(page === "services"){
      setServices(activePage)
    }
    else if(page === "contact"){
      setContact(activePage)
    }
  }
  return (
    <div className='w-100 '>
        {/* <div className="flex flex-col justify-end align-center text-4xl font-black tracking-wider h-2/3">
        </div> */}
        <div className="flex flex-row justify-center items-center py-3 bg-gradient-to-t from-gray-50 to-gray-200">
            <Link to='/' className={navButton + home} onClick={()=>{handleActive("home")}}>Home</Link>
            <Link to='/About' className={navButton + about} onClick={()=>{handleActive("about")}}>About</Link>
            <Link to='/Services' className={navButton + services} onClick={()=>{handleActive("services")}}>Services</Link>
            <Link to='/Contact' className={navButton + contact} onClick={()=>{handleActive("contact")}}>Contact</Link>
        </div>
    </div>
  )
}

export default Nav