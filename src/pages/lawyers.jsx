import NavBar from "../components/NavBar";
import Lawyers from '../components/lawyers'
import React from 'react'
import Footer from "../components/footer";

 const Lawyer = () => {
  return (
    <>
    <NavBar/>
    <Lawyers/>
    <Footer />
     <div className="whatsapp">
        <a href="https://wa.me/+201023343014">
          <img src="whatsapp (3).png" alt="whatsapp" />
        </a>
      </div>
    </>
  )
}
export default Lawyer
