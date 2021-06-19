import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import FeatureProject from './components/FeatureProject';
import Footer from './components/Footer';
import OtherProject from './components/OtherProject';
import React, { useState, useEffect } from 'react'
import Loading from './HelpingComponents/Loading';
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
