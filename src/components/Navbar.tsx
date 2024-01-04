import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="Nav">
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
                <button className='contact' >Get in touch</button>
                <img className='right-logo' src="https://aksha.algoanalytics.com/images/image_54.svg" alt="" />
            </li>
          </ul>
        </div>
    </nav>
  )
}
