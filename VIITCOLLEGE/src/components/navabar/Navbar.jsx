import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky,setsticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50 ? setsticky(true):setsticky(false);
        })
    },[]);

    const [Mobilemenu,setMobilemenu]=useState(false);
    const togglemenu=()=>{
        Mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
    }

    return (
        <div>
            <nav className={`container 
            ${sticky ? 'dark-nav' : ''}`}>
                <img src={logo} alt="" className='logo' />
                <ul className={Mobilemenu?'':'mobile-menu'}>
                    <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
                    <li> <Link to='program' smooth={true} offset={-260} duration={500}>program</Link> </li>
                    <li> <Link to='about' smooth={true} offset={-150} duration={500}>About</Link> </li>
                    <li> <Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link> </li>
                    <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>testimonials</Link> </li> 
                    <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>contact</Link></li> 
                </ul>
                <img onClick={togglemenu} src={menu_icon} alt="" className='menu-icon'/>
            </nav>
        </div>
    )
}

export default Navbar
