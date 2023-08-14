import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import playbit from '../assets/images/png/playbit.png'
import partner_24 from '../assets/images/png/partners_24.png'
import trading_partners from '../assets/images/png/trading_partners.png'
import group_equality from '../assets/images/png/group_equality.png'
import our_algo_img1 from '../assets/images/png/our_algo_img1.png'
import our_algo_img3 from '../assets/images/png/our_algo_img3.png'
import our_algo_img2 from '../assets/images/png/our_algo_img2.png'
import what_do_img1 from '../assets/images/png/what_do_img1.png'
import what_do_img2 from '../assets/images/png/what_do_img2.png'
import what_do_img3 from '../assets/images/png/what_do_img3.png'
import bg_partner from '../assets/images/svg/background_drop_partner.svg'
import Slider from 'react-slick'
const Partners = () => {
    var partner = {
        dots: false,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        cssEase: "linear",
        infinite: true,
        pauseOnHover:false,
        speed: 1500,
        slidesToShow: 3,
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
        <section className='bg-black pb-4 position-relative'>
            <div className='white_circle partner_circle d-none d-sm-block'></div>
            <div className='white_circle partner_circle_1 d-none d-sm-block'></div>
            <div className='white_circle partner_circle_2 d-none d-sm-block'></div>
            <div className='bg_partner d-none d-sm-block'><img src={bg_partner} alt="drop" /></div>
            <h2 className='headings text-center pb-5' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">Part<span className='text_F1AC73'>ners</span></h2>
            <div className='partners_bg mt-5 py-5 w-100'>
                <Container className='pb-5'>
                    <Slider {...partner} className='pt-5 mt-5'>
                        <div className='mx-3 d-flex justify-content-center' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className='text-center'>
                                <div className='playbit'>
                                    <img src={playbit} alt="playbit" />
                                </div>
                                <p className='ff_lato text_000000 fs_sm fw_bold mt-4'>playbit</p>
                            </div>
                        </div>
                        <div className='mx-3 d-flex justify-content-center' data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className='text-center'>
                                <div className='partners_img_box'>
                                    <img src={partner_24} alt="partner_24" />
                                </div>
                                <p className='ff_lato text_000000 fs_sm fw_bold mt-4'>24 Capital</p>
                            </div>
                        </div>
                        <div className='mx-3 d-flex justify-content-center' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className='text-center'>
                                <div className='partners_img_box'>
                                    <img src={trading_partners} alt="trading_partners" />
                                </div>
                                <p className='ff_lato text_000000 fs_sm fw_bold mt-4'>TradingHive</p>
                            </div>
                        </div>
                        <div className='mx-3 d-flex justify-content-center' data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className='text-center'>
                                <div className='partners_img_box'>
                                    <img src={group_equality} alt="group_equality" />
                                </div>
                                <p className='ff_lato text_000000 fs_sm fw_bold mt-4'>Focus Group Equities</p>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
            <p className='ff_lato text_F1AC73 fs_sm fw_bold text-center' data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">For business and collaborations, contact us team@cyberdrops.finance</p>
            <Container className='mt-lg-5 pt-5'>
                <Row className='pb-4 mt-lg-5 pt-lg-5 align-items-center'>
                    <Col lg={6} className='mb-lg-0 mb-5'>
                        <h2 className='headings mb-3 pb-1' data-aos="fade-right" data-aos-duration="1000">Our <span className='text_F1AC73'> Algo</span></h2>
                        <p className='ff_lato fs_sm text_ffffff fw-normal' data-aos="fade-right" data-aos-duration="1000">We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily<span className='d-lg-block'> micromanagement. While most trading algorithms can’t stand up</span> against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of<span className='d-lg-block'> income with minimal ups and downs. Our algorithm has been in</span> the works for YEARS. This has given us the time to rigorously<span className='d-lg-block'>backtest and release any needed hotfixes. As of early March 2022,</span> we have close to a quarter of a million under direct management!</p>
                    </Col>
                    <Col lg={6}>
                        <div className='d-flex align-items-center justify-content-lg-end justify-content-center'>
                            <div className='me-4 d-flex flex-column justify-content-lg-end'>
                                <img className='mb-3 w_sm_100' data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000" src={our_algo_img1} alt="our_algo_img1" />
                                <img className='w_sm_100' data-aos="fade-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000" src={our_algo_img3} alt="our_algo_img3" />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <img className='w_sm_100' src={our_algo_img2} alt="our_algo_img2" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='align-items-center my-lg-5 py-5'>
                    <Col xl={6} className='d-flex justify-content-center mb-5 mb-xl-0'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <img data-aos="fade-right" data-aos-duration="1000" className='w_sm_100' src={what_do_img1} alt="what_do_img" />
                                </div>
                                <div>
                                    <img data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000" className='w_sm_100' src={what_do_img2} alt="what_do_img" />
                                </div>
                            </div>
                            <div className='d-flex ms-0 ms-sm-5 ps-sm-4 ps-0 mt-30'>
                                <div>
                                    <img data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000" className='w_sm_100' src={what_do_img3} alt="what_do_img" />
                                </div>
                                <div>
                                    <img data-aos="fade-left" data-aos-duration="1000" className='w_sm_100' src={what_do_img3} alt="what_do_img" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className='d-flex justify-content-xl-end'>
                        <div>
                            <h2 className='headings' data-aos="fade-left" data-aos-duration="1000">What <span className='text_F1AC73'>we do</span></h2>
                            <p className='ff_lato fs_sm fw-normal text_ffffff' data-aos="fade-left" data-aos-duration="1000">1000 Cyber Drops will be dropping on Ethereum in March <span className='d-xl-block'>2022. Each and every Cyber Drop is uniquely hand crafted.</span> This is just the beginning of our journey. Owning a Cyber <span className='d-xl-block'>Drop will unlock monthly airdrops and future governance</span> rights in addition to our revolutionary algorithm. We strive <span className='d-xl-block'>to always bring innovation and keep BUILDing. Cyber</span> Drops is a community driven project and always will be <span className='d-xl-block'> that way. That’s our promise.</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Partners