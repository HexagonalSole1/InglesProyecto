import React from 'react';
import "../css/nav.css";
import img from "../assets/img/LogoUp.jpeg"

export default function Nav() {
  return (
    <div className="NavContainer">

      <div className='NavLogo'>

        <img src={img} alt="" />

      </div>

      <div className='DivTitulo'>

         <p className='Titulo'>
          Universida Politecnica News
          </p>   
      </div>


    </div>
  );
}
