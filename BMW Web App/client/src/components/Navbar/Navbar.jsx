import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import audioFile from '../../assets/audio.mp3'
import BMWLogo from '../../assets/logo-light.svg'
import MLogo from '../../assets/bmw-m-seeklogo.png'


const Navbar = () => {

    const audioRef = useRef(null);

    const playSound = () => {
        audioRef.current?.play();
    }

    return (
        <div>
            <div className="nav">
            <nav>
            <div className="menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/gallery">Cars</Link></li>
                  <li>
                    <a href="#motorsport">Motorsport▾</a>
                    <ul className="dropdown">
                      <li><Link to="/motorsport/overview">Overview</Link></li>
                      <li><Link to="/race-cars">Race Cars</Link></li>
                      <li><Link to="/racing-series">Racing Series</Link></li>
                      <li><Link to="/wallpaper">M Gallery</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/driving-experience">My Bookings</Link></li>
                </ul>
                <hr/>
                <h1 id="clickText" onClick={playSound}>Hear The Ultimate Performance Machine</h1>
                <audio ref={audioRef} src={audioFile} id="sound"></audio>
            </div>
            <Link to='/'><img src={BMWLogo} alt='BMW Logo' className="logo"/></Link>   
            <Link to='/'><img src={MLogo} alt='BMW M Logo' className="logo"/></Link>
            </nav>
            <button className='login-btn'>Login</button>
            </div>
        </div>
    )
}

export default Navbar
