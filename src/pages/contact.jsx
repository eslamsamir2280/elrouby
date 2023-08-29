import React from 'react'
import ContactUs from '../components/contactUS'
import NAV_BAR from "../components/NavBar";
import Footer from "../components/footer";
const contact = () => {
  return (
    <>
    <NAV_BAR/>
    <ContactUs/>
    <Footer />
      <div className="whatsapp">
        <a href="https://wa.me/+201023343014">
          <img src="whatsapp (3).png" alt="whatsapp" />
        </a>
      </div>
    </>
  )
}

export default contact
