import React, { useState } from 'react'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible); 
    return (
        <div>
            <button className='border-0 back_top_btn' onClick={scrollToTop}
                style={{ display: visible ? "inline " : "none" }}>^</button>
        </div>
    )
}

export default BackToTop