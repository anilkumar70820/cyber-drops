import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import roadmap_drop1 from '../assets/images/svg/roadmap_drop1.svg'
import roadmap_drop2 from '../assets/images/svg/roadmap_drop2.svg'
import roadmap_drop3 from '../assets/images/svg/roadmap_drop3.svg'
import roadmap_drop4 from '../assets/images/svg/roadmap_drop4.svg'
import roadmap_drop5 from '../assets/images/svg/roadmap_drop5.svg'
import roadmap_drop6 from '../assets/images/svg/roadmap_drop6.svg'
import roadmap_drop7 from '../assets/images/svg/roadmap_drop7.svg'
import roadmap_drop8 from '../assets/images/svg/roadmap_drop8.svg'
import bg_roadmap from '../assets/images/svg/background_drop_roadmap.svg'
import bg_roadmap_1 from '../assets/images/svg/background_drop_partner.svg'
import bg_roadmap_2 from '../assets/images/svg/background_drop_team.svg'
const Roadmap = () => {
  return (

    <section className='bg-black py-5 roadmap_bg position-relative'>
      <div className='bg_roadmap d-none d-sm-block'><img src={bg_roadmap} alt="drop" /></div>
      <div className='bg_roadmap_1 d-none d-sm-block'><img src={bg_roadmap_1} alt="drop" /></div>
      <div className='bg_roadmap_2 d-none d-sm-block'><img src={bg_roadmap_2} alt="drop" /></div>
      <Container className='mb-5'>
        <h2 className='headings text-center my-lg-5 pb-5 pt-lg-4' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">Road <span className=' text_F1AC73'>MAP</span></h2>
        <div className='time_line'>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={roadmap_drop1} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ps-lg-3 ps-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0'>1000 Drops Launch <span className='d-block d-sm-inline'> on Ethereum </span></p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={roadmap_drop2} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ps-5 ms-lg-0 ps-lg-0 me-lg-5 pe-lg-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0 text-center'>1000 Drops Launch on Ethereum</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={roadmap_drop3} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ms-lg-0 ps-lg-0 ps-5 me-sm-5 pe-sm-4 me-lg-0 pe-lg-0'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0'>Creation of Treasury</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={roadmap_drop4} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-lg-0 ps-5 me-sm-5 pe-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>April 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0 text-center'>Our First Airdrop</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={roadmap_drop5} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ms-lg-0 ps-lg-0 ps-5 pe-lg-3 me-sm-5 pe-sm-5 me-lg-0'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>June 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0'>Major Collabs</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={roadmap_drop6} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-5 ps-lg-0 me-lg-5 pe-lg-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>Sometime in Q3</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0 text-center'>Cyber Celebs come on Ethereum</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={roadmap_drop7} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ps-lg-3 ps-5 me-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>Sometime in Q3</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0'>Streetwear + Merch</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={roadmap_drop8} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-lg-0 ps-5 pe-lg-5 me-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semi-bold fs_xmd'>Sometime in Q4</h3>
                <p className='ff_lato text_ffffff fw-normal fs_xsm mb-0 text-center'>Enhanced Partnerships</p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Roadmap