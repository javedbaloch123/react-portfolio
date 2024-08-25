import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
    let [menu, setmenu] = useState('home');
    let menuRef = useRef();
    let openMenu = ()=>{
        menuRef.current.style.right='0';

    }
    let closeMenu=()=>{
        menuRef.current.style.right='-350px';
    }
    return (
        <div className='navbar'>
            <img src={logo} />
            <img src={menu_open} alt="" className='nav-open' onClick={openMenu}/>
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} alt="" className="menu-close" onClick={closeMenu}/>
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setmenu('home')}>Home</p>{menu === 'home' ? <img src={underline} /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={() => setmenu('about')}>About Us</p>{menu === 'about' ? <img src={underline} /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() => setmenu('service')}>Services</p>{menu === 'service' ? <img src={underline} /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setmenu('work')}>Portfolio</p>{menu === 'work' ? <img src={underline} /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu('contact')}>Contact</p>{menu === 'contact' ? <img src={underline} /> : <></>}</AnchorLink></li>
            </ul>
            <div className="nav-content">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with Me</AnchorLink>
            </div>
        </div>
    )
}
export default Navbar