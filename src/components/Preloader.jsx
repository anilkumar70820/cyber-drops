import React from 'react'
import logo from '../assets/images/png/logo_cyber_drops.png'
import cyber_drop from '../assets/images/png/cyber_drop.png'
import  drop from '../assets/images/png/footer_logo.png'
const Preloader = () => {
    return (
        <div>
            <div className="bg-black d-flex flex-column justify-content-center align-items-center position-fixed top-0 left-0 min-vh-100 z-3 w-100">
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='preloader_animation'><img className='w-50' src={cyber_drop} alt="cyber_drop" /></div>
                <div className='preloader_animation_1'><img src={drop} alt="drops" /></div>
            </div>
        </div>
    )
}

export default Preloader