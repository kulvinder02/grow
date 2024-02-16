import React , { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import { ForthSection } from './components/ForthSection';
import Footter from './components/Footter';
import Backtotop1 from './components/comon/Backtotop1';
import Loader1 from './components/comon/Loader1';
import Form2 from './components/Form2';
import AccdrnSection2 from './components/AccdrnSection2';

function App() {
  useEffect(() => {
    AOS.init({duration:1000 , once:true});
  }, [])
  return (
    <div className="App">
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
      <Form2/>
      <AccdrnSection2/>
       <Footter/>
       <Backtotop1/>
      <Loader1/>
    </div>
  );
}

export default App;
