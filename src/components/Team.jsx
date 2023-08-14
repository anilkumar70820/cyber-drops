import React from 'react'
import team_1 from '../assets/images/png/team_img_1.png'
import team_2 from '../assets/images/png/team_img_2.png'
import { Container } from 'react-bootstrap'
import { TeamDiscord, TeamModal, TeamTwitter } from './Icons'
import bg_team from '../assets/images/svg/background_drop_team.svg'
import Slider from 'react-slick'
const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover:false,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
    ]
  };
  return (
    <section className='bg-black py-5 position-relative'>
      <div className='white_circle team_circle d-none d-sm-block'></div>
      <div className='bg_team d-none d-sm-block'><img src={bg_team} alt="drop" /></div>
      <Container className='my-lg-5'>
        <h2 className='headings text-center mb-5 pb-3' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">Meet the <span className='text_F1AC73'>Team</span></h2>
        <Slider {...settings}>
          <div className='d-flex justify-content-center'>
            <div className='team_card d-flex align-items-center justify-content-between' data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <div>
                <img className='w-100' src={team_1} alt="team_1" />
              </div>
              <div className='text-center pe-4 ps-2'>
                <h2 className='ff_lato fw-bold fs_xmd text_000000 mb-2'>Varun Muthu</h2>
                <p className='ff_lato fs_sm fw-medium text_000000 mb-sm-4 mb-0 pb-2'>Marketing Director</p>
                <a className='text-center ff_lato fs_xsm fw-normal text_000000' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/ <span className='d-md-block'>in/varunmuthu1</span></a>
                <div className='mt-sm-4 pt-2 d-flex align-items-center gap-2 justify-content-center'>
                  <a href="https://Discord.com"><TeamDiscord /></a>
                  <a href="https://twitter.com"><TeamTwitter /></a>
                  <a href="https://modal.com"><TeamModal /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='team_card d-flex align-items-center justify-content-between' data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" data-aos-delay="500">
              <div>
                <img className='w-100' src={team_2} alt="team_2" />
              </div>
              <div className='text-center pe-4 ps-2'>
                <h2 className='ff_lato fw-bold fs_xmd text_000000 mb-2'>Shubh Sharma</h2>
                <p className='ff_lato fs_sm fw-medium text_000000 mb-sm-4 mb-0 pb-2'>Operations Director</p>
                <a className='text-center ff_lato fs_xsm fw-normal text_000000' href="https://www.linkedin.com/in/shubhsharma01/">https://www.linkedin.com/ <span className='d-md-block'>in/shubhsharma01/</span></a>
                <div className='mt-sm-4 pt-2 d-flex align-items-center gap-2 justify-content-center'>
                  <a href="https://Discord.com"><TeamDiscord /></a>
                  <a href="https://twitter.com"><TeamTwitter /></a>
                  <a href="https://modal.com"><TeamModal /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='team_card d-flex align-items-center justify-content-between' data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" data-aos-delay="500">
              <div>
                <img className='w-100' src={team_1} alt="team_1" />
              </div>
              <div className='text-center pe-4 ps-2'>
                <h2 className='ff_lato fw-bold fs_xmd text_000000 mb-2'>Varun Muthu</h2>
                <p className='ff_lato fs_sm fw-medium text_000000 mb-sm-4 mb-0 pb-2'>Marketing Director</p>
                <a className='text-center ff_lato fs_xsm fw-normal text_000000' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/ <span className='d-md-block'>in/varunmuthu1</span></a>
                <div className='mt-sm-4 pt-2 d-flex align-items-center gap-2 justify-content-center'>
                  <a href="https://Discord.com"><TeamDiscord /></a>
                  <a href="https://twitter.com"><TeamTwitter /></a>
                  <a href="https://modal.com"><TeamModal /></a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default Team