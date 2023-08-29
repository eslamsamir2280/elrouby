import NAV_BAR from "../components/NavBar";
import AboutUs from "../components/aboutUs";
import Whyus from "../components/whyus";
import Footer from "../components/footer";
import React from 'react'

 const About = () => {
  return (
    <>
    <NAV_BAR/>
    <AboutUs/>
    <Whyus/>
    <Footer />
     <div className="whatsapp">
        <a href="https://wa.me/+201023343014">
          <img src="whatsapp (3).png" alt="whatsapp" />
        </a>
      </div>
    </>
  )
}
export default About
