import Services from "../components/services";
import NavBar from "../components/NavBar";
import React from 'react'
import Footer from "../components/footer";
export const Servies = () => {
  return (
    <>
    <NavBar/>
    <Services/>
    <Footer />
      <div className="whatsapp">
        <a href="https://wa.me/+201023343014">
          <img src="whatsapp (3).png" alt="whatsapp" />
        </a>
      </div>
    </>
  )
}
