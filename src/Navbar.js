import React from "react";
import logo from './autoresin-logo.svg'
import { IoMenuOutline } from "react-icons/io5";


export default function Navbar({ link, page, openSideNav }) {

  var title = page === 'about' ? "about us" : page === "contact" ? "contact us" : page;
    return (
        <div className="navbar">

            <div className="sideNavButton">
              <IoMenuOutline color="white" size={20} onClick={openSideNav} />
            </div>

            <div className="navlogo" onClick={() => {link('home')}}>
              <img src={logo} alt="" />
              <div className="navline"></div>
              <div className="logoTextCont">
                <div className="logoText" style={{letterSpacing: '1px'}}>
                  <span className='auto' style={{marginRight: '2px'}}>{title}</span>
                  {/* <span className='resin'>RESIN</span> */}
                </div>
              </div>
            </div>

            <div className="navLinks">
              <span onClick={() => {link('home')}}>HOME</span>
              {page !== 'about' ? <span onClick={() => {link('about')}}>ABOUT</span> : null}
              {page !== 'services' ? <span onClick={() => {link('services')}}>SERVICES</span> : null}
              {page !== 'contact' ? <span onClick={() => {link('contact')}}>CONTACT</span>: null}
              {page !== 'raffle' ? <span onClick={() => {link('raffle')}}>RAFFLE</span> : null}
            </div>
        </div>
    )
}