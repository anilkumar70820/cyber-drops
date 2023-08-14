import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import HowItWork from './components/HowItWork';
import Partners from './components/Partners';
import Hero from './components/Hero';
import Team from './components/Team';
import Faq from './components/Faq';
import Roadmap from './components/Roadmap';
import BackToTop from './components/BackToTop';
function App() {
  const [preloading, setPreLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
      document.body.classList.remove('overflow-hidden')
    }, 3000);
    document.body.classList.add('overflow-hidden')
  }, []);
  return (
    <React.Fragment>
      {preloading && <Preloader />}
      <Hero />
      <Partners />
      <HowItWork />
      <Team />
      <Roadmap />
      <Faq />
      <BackToTop />
    </React.Fragment>
  );
}

export default App;
