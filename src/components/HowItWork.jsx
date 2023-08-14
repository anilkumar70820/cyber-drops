import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

const HowItWork = () => {
    var work = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    }
    return (
        <section className='bg-black pt-3'>
            <Container>
                <h2 className='headings text-center mb-5 pb-lg-3' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">How it <span className='text_F1AC73'> works</span></h2>
                <Slider {...work}>
                    <div className='d-flex justify-content-center'>
                        <div className='work_cards' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <div className=' d-flex justify-content-center mb-4 pb-2 pt-4'>
                                <h2 className='ff_lato fw-bold fs_md text_ffffff work_count_box mb-0'>01</h2>
                            </div>
                            <h2 className='ff_lato fw-bold fs_2xmd text_ffffff text-center mb-3'>Mint NFT</h2>
                            <p className='text_ffffff ff_lato fw-normal fs_xsm text-center mb-4 px-4'>You must own our NFT to connect to direct management or participate in governance
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='work_cards' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" data-aos-delay="500">
                            <div className=' d-flex justify-content-center mb-4 pb-2 pt-4'>
                                <h2 className='ff_lato fw-bold fs_md text_ffffff work_count_box mb-0'>02</h2>
                            </div>
                            <h2 className='ff_lato fw-bold fs_2xmd text_ffffff text-center mb-3'>Verify NFT Ownership</h2>
                            <p className='text_ffffff ff_lato fw-normal fs_xsm text-center px-4'>Only Cyber Drops that are <span className='d-block'>have verified are eligible to be </span>connected under direct management

                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='work_cards' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" data-aos-delay="1000">
                            <div className=' d-flex justify-content-center mb-4 pb-2 pt-4'>
                                <h2 className='ff_lato fw-bold fs_md text_ffffff work_count_box mb-0'>03</h2>
                            </div>
                            <h2 className='ff_lato fw-bold fs_2xmd text_ffffff text-center mb-3'>Link API to your account</h2>
                            <p className='text_ffffff ff_lato fw-normal fs_xsm text-center mb-0 px-3'>Only HODLers that submit their API key and secret will be under direct management
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='work_cards' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <div className=' d-flex justify-content-center mb-4 pb-2 pt-4'>
                                <h2 className='ff_lato fw-bold fs_md text_ffffff work_count_box mb-0'>04</h2>
                            </div>
                            <h2 className='ff_lato fw-bold fs_2xmd text_ffffff text-center mb-3'>Passive Income for life</h2>
                            <p className='text_ffffff ff_lato fw-normal fs_xsm text-center px-3'>As long as your HODL your Cyber Drop, you will be connected under direct management
                            </p>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default HowItWork