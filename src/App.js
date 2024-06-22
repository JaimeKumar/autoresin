import './App.css';
import logo from './autoresin-logo.svg'
import { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import CountdownTimer from './RaffleCount';
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneSquare } from "react-icons/fa";

function App() {
  const [page, setPage] = useState('home');
  const [doAnim, setDoAnim] = useState(true);
  const [liquify, setLiquify] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const appRef = useRef(null);
  const targetDate = '2024-06-30T12:00:00';

  const link = (where) => {
    setDoAnim(false);
    setLiquify(true);
    animateScale(1, 250, 400, false, where);
  }

  const openSideNav = () => {
    setSideOpen(!sideOpen)
  }

  const animateScale = (start, end, duration, stop, where) => {
    const stepTime = 10;
    const steps = duration / stepTime;
    const stepSize = (end - start) / steps;
    let currentScale = start;
    let stepCount = 0;

    const step = () => {
      currentScale += stepSize;
      appRef.current.querySelector('#liquid').setAttribute('scale', currentScale);
      if (currentScale / end <= 1) {
        appRef.current.style.opacity = 1 - (currentScale / end);
      } else {
        appRef.current.style.opacity = 1 - (currentScale / start);
      }
      stepCount++;
      if (stepCount < steps) {
        setTimeout(step, stepTime);
      } else {
        appRef.current.querySelector('#liquid').setAttribute('scale', end);
        if (!stop) {
          setPage(where)
          animateScale(end, start, duration, true, '');
          appRef.current.style.opacity = 0;
        } else {
          appRef.current.style.opacity = 1;
        }
      }
    };

    step();
  };

  useEffect(() => {
    if (!sideOpen) {
      appRef.current.style.left = "0px";
    } else {
      appRef.current.style.left = "80px";
    }
  }, [sideOpen])

  return (
    <div className={`App ${liquify ? 'liquify' : ''}`} ref={appRef} id='app'>
      {
        page === 'home' ?
          <div className="page" id="home">
            <div className="logo" style={doAnim?{columnGap: 0, animation: 'logoCont 1s 1s ease forwards'}:{columnGap: '15px'}}>
              <img src={logo} alt="AutoResin logo" style={doAnim?{opacity: 0, animation: 'logo 1.5s ease forwards'}:{opacity: 1}} />
              <div className="logoLine" style={doAnim?{opacity: 0, animation: 'logoLine 1s 1s ease forwards'}:{opacity: 1}}></div>
              <div className="logoTextCont">
                <div className="logoText" style={doAnim?{width: 0, animation: 'logoText 1.5s 1.6s ease forwards'}:{width: 'auto'}}>
                  <span className='auto'>AUTO</span>
                  <span className='resin'>RESIN</span>
                </div>
              </div>
            </div>

            <div className="links" style={doAnim? {opacity: 0, animation: 'logo 2s 2.5s ease forwards'}:{opacity: 1}}>
              <span onClick={()=>{link('about')}}>ABOUT</span>
              <span onClick={() => {link('services')}}>OUR SERVICES</span>
              {/* <span onClick={() => {link('contact')}}>CONTACT US</span> */}
              <span onClick={() => {link('raffle')}}>RAFFLE</span>
            </div>

            {/* <div className="raffleLink" onClick={() => {link('raffle')}} style={doAnim?{opacity: 0, animation: 'logo 2s 4s ease forwards'}:{opacity: 1}}>
              launch raffle
            </div> */}
          </div>
        : 
        page === 'raffle' ?
          <div className="page" id="raffle">
            <CountdownTimer targetDate={targetDate} />
          </div>
        :
        page === 'about' ?
          <div className="page" id="about">
            <div className="aboutCont">
              <p>
                Welcome to AutoResin, where the art of resin meets the world of luxury automobiles. Founded by two world renowned resin artists, our company was born out of a passion for creativity and functionality.
              </p>

              <p>
              Our founders have redesigned resin artistry, now they bring their expertise to a unique niche; bespoke garage surfaces that perfectly complement and enhance the beauty of your vehicles.
              </p>

              <p>
                At AutoResin we understand that your garage is more than just a storage space. Our custom designed resin surfaces are meticulously crafted to match the aesthetics of your prized vehicles, transforming ordinary garages into extraordinary showcases.
              </p>

              <p>
                Each project is a testament to our commitment to quality, innovation and unparalleled craftsmanship.
              </p>

              <p>
                Join us on a journey where functionality meets artistry.
              </p>

              <p className="hiddenAbout">
                im here for padding, css is weird <br /> <br />
                even more needed apparently <br /> <br />
                third line I dont get it
              </p>

            </div>
            <img src={logo} alt="AutoResin logo" className="bkgLogo" />
          </div>
        :
        page === 'services' ?
          <div className="page" id="services">
            <div className="servicesCont">
              <div className="serviceBlock">
                <h1>Bespoke Flooring</h1>
                <p>We offer a range of bespoke flooring, with a variety of surface materials and designs. Get in touch to discuss how we can turn your garage into the perfect space for your vehicles.</p>
                <h3>Material Options</h3>
                <p>Epoxy Resin</p>
                <p>Polyurethane Resin</p>
                <p>Polished Concrete</p>
                <h3>Design Options</h3>
                <p>Marble</p>
                <p>Block Colour</p>
                <p>Gradient</p>
              </div>

              <div className="servLine"></div>

              <div className="serviceBlock">
                <h1>Full Garage Restoration</h1>
                <p>If your garage needs more than a bespoke floor to come to life, we offer a more in depth service with bespoke lighting and paint to create a cohesive space for your vehicles. <br /><br />Like with all our services, we know each garage is unique so we can fit our services around your vision. Contact us to discuss which options would be right for your space and to get a quote.</p>
                <h3>Service Options</h3>
                <p>Full Bespoke Flooring</p>
                <p>Hex Lighting</p>
                <p>Interior Paint</p>
              </div>

              <div className="servLine"></div>

              <div className="serviceBlock">
                <h1>Bespoke Built AutoResin Garage</h1>
                <p>Our top package offers a full garage construction with bespoke flooring, lighting, paint and decor. At AutoResin we understand how important the protection of your vehicles are, so our bespoke-built garages not only protect your vehicles from the environment but also come equipped with state of the art CCTV and security systems. Please contact us to discuss your dream garage.</p>
                <h3>Service Options</h3>
                <p>Bespoke Shell Build</p>
                <p>Bespoke Decor</p>
                <p>Bespoke Flooring</p>
                <p>CCTV & Security</p>
                <p>Hex Lighting</p>
                <p>Interior Paint</p>
              </div>

              <div className="serviceBlock" id="extraBlock">
                <h1>hello</h1>
              </div>
            </div>
            {/* 
                  <ul>
                    <li>Bespoke Shell Build</li>
                    <li>Bespoke Decor</li>
                    <li>Bespoke Floor</li>
                  </ul>
                  <ul>
                    <li>CCTV & Security</li>
                    <li>Hex Lighting</li>
                    <li>Interior Paint</li>
                  </ul>
                </div>
              </div>
            </div> */}
            
          </div>
        :
        page === 'contact' ?
          <div className="page" id="contact">
              {/* <p style={{maxWidth: '300px', textAlign: 'center'}}>Get in touch to enquire about your garage and to get a quote.</p> */}
              <div style={{display: 'flex', width: '100%', justifyContent: 'center', columnGap: '50px'}}>
                <a href="https://www.instagram.com/autoresinuk/" className='contactA'>
                  <FaInstagram color='white' size={50} />
                  <p>AutoResinUK</p>
                </a>

                <a href="mailto:enquiries@autoresin.co.uk" className='contactA'>
                  <HiOutlineMailOpen color='white' size={50} />
                  <p>enquiries@autoresin.co.uk</p>
                </a>

                <a href="tel:+447903867856" className='contactA'>
                  <FaPhoneSquare color='white' size={50} />
                  <p>+44 7903 867 856</p>
                </a>
              </div>
          </div>
        :
        null
      }

      <div className="sideNav">
        <p onClick={() => {openSideNav(); link("about")}}>ABOUT</p>
        <p onClick={() => {openSideNav(); link("services")}}>SERVICES</p>
        <p onClick={() => {openSideNav(); link("contact")}}>CONTACT</p>
        <p onClick={() => {openSideNav(); link("raffle")}}>RAFFLE</p>
      </div>

      {page !== 'home' ? <Navbar link={link} page={page} openSideNav={openSideNav} /> : null}

      <div className="footer">
        <a href="mailto:enquiries@autoresin.co.uk">enquiries@autoresin.co.uk</a>
        <a href="tel:+447903867856">+44 7903 867 856</a>
        <a href="https://www.instagram.com/autoresinuk/">instagram/AutoResinUK</a>
      </div>

      <svg id="svgeffects">
        <defs>
          <filter className="safari_only" id="liquify">
            <feTurbulence baseFrequency="0.015" numOctaves="3" result="warp" type="fractalNoise"></feTurbulence>
            <feDisplacementMap id="liquid" in="SourceGraphic" in2="warp" scale="0" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
