import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='container'>
      <ul className='nav-list'>
        <li className='logo' >
            <img src="https://aksha.algoanalytics.com/aksha_logo.svg" alt="" />
        </li>
        <div className="link-container">
            <li className="nav-item">
                <a href="/" className="link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/" className="link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/" className="link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/" className="link">Home</a>
            </li>
        </div>
        <li className='right' >
            <button className='contact' >Get in touch</button>
            <img className='right-logo' src="https://aksha.algoanalytics.com/images/image_54.svg" alt="" />
        </li>
      </ul>
    </nav>
  )
}
