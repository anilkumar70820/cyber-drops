import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Discord, Modal, Ship, Twitter } from '../Icons';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/png/logo_cyber_drops.png'

const CyberNav = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden')
    }
    return (
        <header className='py-4 bg-black position-fixed top-0 z-2 w-100'>
            <Container>
                <nav className='d-flex justify-content-between align-items-center'>
                    <img src={logo} alt="logo" />
                    <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm p-0' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show p-0'} `}>
                        <li><Link onClick={() => setShowNavbar(true)} className='ff_lato fs_sm text_ffffff fw-normal underline link'>Home</Link></li>
                        <li><Link onClick={() => setShowNavbar(true)} className='ff_lato fs_sm text_ffffff fw-normal underline link'>About</Link></li>
                        <li><Link onClick={() => setShowNavbar(true)} className='ff_lato fs_sm text_ffffff fw-normal underline link'>Team</Link></li>
                        <li><Link onClick={() => setShowNavbar(true)} className='ff_lato fs_sm text_ffffff fw-normal underline link'>Roadmap</Link></li>
                        <li><Link onClick={() => setShowNavbar(true)} className='ff_lato fs_sm text_ffffff fw-normal underline link'>Partners</Link></li>
                        <li className='d-flex gap-3'>
                            <a className='icon_box' href="http://ship.com"><Ship /></a>
                            <a className='icon_box' href="http://discord.com"><Discord /></a>
                            <a className='icon_box' href="http://twitter.com"><Twitter /></a>
                            <a className='icon_box' href="http://modal.com"><Modal /></a>
                        </li>
                        <li><button className='connect_wallet text_ffffff fs_sm fw-medium ff_lato'>Connect Wallet</button></li>
                        <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                    </ul>
                    <span title="open"
                        className="d-inline d-lg-none fw-bold fs-1 text-white"
                        onClick={() => setShowNavbar(false)}>
                        &#9776; </span>
                </nav>
            </Container>
        </header>
    )
}

export default CyberNav