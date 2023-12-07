import React from 'react'
import "../Styles/Body.css"
import fiverr from "../images/fiverr.png"
import khamsat from "../images/khamsat.png"

function Body() {
  
  return (
    <>
            <div class="All">
            <p id="txt">My Small Business</p>
            <div class="container">
          <div class="box">
          <a href="http://www.fiverr.com/s/394lgV" target="_blank" rel="noopener noreferrer">
          <img src={fiverr} alt=""/>
          </a>
          </div>
          <div class="box">
         <a href="https://khamsat.com/user/salima_dm/services" target="_blank" rel="noopener noreferrer">
         <img src={khamsat} alt=""/>
          </a>
         </div>
         </div>
   </div>
  
    </>
  )
}

export default Body
