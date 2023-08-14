import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CyberNav from '../components/common/CyberNav'
import cyber_drops from '../assets/images/png/cyber_drop.png'
import our_mission from '../assets/images/png/our_mission.png'
const Hero = () => {
  return (
    <section className='bg-black pt-5 mt-5 pb-5 position-relative'>
      <><CyberNav/></>
      <div className='white_circle hero_circle d-none d-sm-block'></div>
      <div className='white_circle hero_circle_1 d-none d-sm-block'></div>
      <div className='white_circle hero_circle_2 d-none d-sm-block'></div>
      <Container className='mb-5 pb-5'>
        <Row className='my-5 pb-5 align-items-center'>
          <Col lg={6} className='mb-5 mb-lg-0'>
            <h1 className='fs_xxl fw-bolder ff_lato text_ffffff mb-4'>Welcome to <span className='d-lg-block text_F1AC73'> Cyber Drops</span></h1>
            <p className='paragraphs mb-5 pb-3'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
            <div className='d-flex justify-content-lg-start justify-content-center'><button className='buttons'>Explore Now</button></div>
          </Col>
          <Col lg={6} className='d-flex justify-content-lg-end justify-content-center'>
            <div>
              <img className='w_sm_100' src={cyber_drops} alt="cyber_drops" />
            </div>
          </Col>
        </Row>
        <Row className='align-items-center mt-5 pt-lg-3'>
          <Col lg={6} className='mb-5 mb-lg-0'>
            <div className='d-flex justify-content-center'>
              <img className='w_sm_100' src={our_mission} alt="our_mission" />
            </div>
          </Col>
          <Col lg={6} className='d-flex justify-content-lg-end'>
            <div>
              <h2 className='headings mb-3 pb-1'>Our <span className='text_F1AC73'>Mission</span></h2>
              <p className="paragraphs mb-5 pb-2">We understand that one of the biggest concerns for early- <span className='d-lg-block'>stage investors is that it can quickly become stressful,</span> overwhelming, and especially extremely time consuming. It<span className='d-lg-block'> isn’t easy to balance a full time job, family, and an active</span> investment portfolio, especially when just starting out.</p>
              <div className='d-flex justify-content-lg-start justify-content-center'><button className='buttons'>Read More</button></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero