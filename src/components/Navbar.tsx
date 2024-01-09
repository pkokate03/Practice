import React, { useEffect, useState } from 'react'
import './Navbar.css'


type FontType={
    "font-style":string
}


export default function Navbar(props:FontType) {

    const [disp,setdisp]=useState<string>("none");
    // const [width,setwidth]=useState(window.innerWidth)

    const toggle=()=>{
        if(disp==="none"){
            setdisp("flex");
        }
        else{
            setdisp("none");
        }
    }

    // useEffect(()=>{
    //     setwidth(window.innerWidth);
    //     console.log(window.innerWidth)
    //     if(window.innerWidth>=950){
    //         setdisp("none");
    //     }
    // },[width])

    

  return (
    <nav className="Nav" style={{fontFamily:props['font-style']}} >
        <div className='container'>
          <ul className='nav-list'>
            <li className='logo' >
                <img src="https://aksha.algoanalytics.com/aksha_logo.svg" alt="" />
                <h2>Aksha</h2>
            </li>
            <div className="link-container">
                <li className="nav-item">
                    <a href="/" className="link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">Features</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">Applications</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">Case studies</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">Clients</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="link">About Us</a>
                </li>
            </div>
            <li className='right' >
                <button className='contact' >Get In Touch</button>
                <img className='right-logo' src="https://aksha.algoanalytics.com/images/image_54.svg" alt="" />
            </li>

            <li onClick={toggle} className='menu' >
                Menu
            </li>

          </ul>
        </div>
        <div style={{display:disp}} className="dropdown">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </div>
    </nav>
  )
}
