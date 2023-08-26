import React from 'react'
import iconLogo from '../logoIcon.png'
import { Link } from "react-router-dom";
 const MainSection = () => {
   return(
       <div className="main_row">
        <div className="container">
          <div className="main_text">
            <img src={iconLogo} alt="" />
            <h1>مؤسسة محمود الروبي</h1>
            <h5>للمحاماة والاستشارات القانونية</h5>
            <div className="buttons">
              <Link to="/تواصل_معنا"><button>تواصل معنا</button></Link>
            </div>
          </div>
        </div>
       </div>
       ) 
 };
export default MainSection;