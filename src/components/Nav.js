import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  const [home, setHome] = useState(" text-pink-400 font-bold")
  const [about, setAbout] = useState("")
  const [services, setServices] = useState("")
  const [contact, setContact] = useState("")
  const navButton = "font-sans px-2 text-gray-500  text-xl transition transform hover:-translate-y-1 hover:bg-pink-400 hover:text-white rounded-sm"
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
    <div className='w-100 bg-gradient-to-b from-gray-50 to-gray-300'>
        <div className="flex flex-col justify-content-center items-center pt-2">
        <Link to='/'><img src="./images/logo/1.png" alt="" className='w-20'/></Link>
        </div>
        <div className="flex flex-row justify-center items-center">
            <Link to='/' className={navButton + home} onClick={()=>{handleActive("home")}}>Home</Link>
            <Link to='/About' className={navButton + about} onClick={()=>{handleActive("about")}}>About</Link>
            <Link to='/Services' className={navButton + services} onClick={()=>{handleActive("services")}}>Services</Link>
            
            <Link to='/Contact' className={navButton + contact} onClick={()=>{handleActive("contact")}}>Contact</Link>
        </div>
    </div>
  )
}

export default Nav