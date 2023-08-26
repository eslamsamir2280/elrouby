import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
const NAV_BAR = () => {
  return (
    <div className="row_Nav">
      <div className="container">
        <div className="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <ul className="navlinks">
          <Link to="/"><li>الصفحة الرئيسية</li></Link>
          <Link to="/من_نحن"><li>من نحن</li></Link>
          <Link to="/الخدمات"><li>الخدمات</li></Link>
          <Link to="/محامين_المؤسسة"><li>محامين المؤسسة</li></Link>
          <Link to="/تواصل_معنا/"> <li>تواصل معنا</li></Link> 
          <a href="https://dar-eladalah.com/systemLoginClients.aspx"><li>تابع قضيتك</li></a>
        </ul>
        <ul class="side-nav" id="sidenav">
          <Link to="/"><li className='"uil uil-angle-left'>الصفحة الرئيسية</li></Link>
          <Link to="/من_نحن"><li className='"uil uil-angle-left'>من نحن</li></Link>
          <Link to="/الخدمات"><li className='"uil uil-angle-left'>الخدمات</li></Link>
          <Link to="/محامين_المؤسسة"><li className='"uil uil-angle-left'>محامين المؤسسة</li></Link>
          <Link to="/تواصل_معنا"> <li className='uil uil-angle-left'>تواصل معنا</li></Link> 

          <a href="https://dar-eladalah.com/systemLoginClients.aspx"><li class="uil uil-angle-left">تابع قضيتك</li></a>
        </ul>

        <div className="mobile_icons" id="nav_icon">
          <i
            class="uil uil-align-justify"
            id="open"
            onClick={() => {
              document.getElementById("sidenav").classList.toggle("show");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default NAV_BAR
