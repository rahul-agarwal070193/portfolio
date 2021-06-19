import '../CSS/App.css';
import About from './About';
import Navbar from './Navbar';
import Hero from './Hero';
import Contact from './Contact';
import FeatureProject from './FeatureProject';
import Footer from './Footer';
import OtherProject from './OtherProject';
import React, { useState, useEffect } from 'react'
import Loading from '../HelpingComponents/Loading';
export default function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => { setloading(false) }, 3000);
  }, [])

  return (
    <>
      {loading ? <Loading /> :
        <div style={{ backgroundColor: "#0a192f" }}>
          <Navbar />
          <div class="container" >
            <Hero />
            <About />
            <FeatureProject />
            <OtherProject />
            <Contact />
            <Footer />
          </div>
        </div>}
    </>
  )
}
