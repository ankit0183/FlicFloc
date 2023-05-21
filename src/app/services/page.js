import React from 'react'
import Nav from '../components/NavBar'
import Head from 'next/head'
import NavBar from '../components/NavBar'


const services = () => {
  return (
    
    <>
      <div className='serviceimage'>
        

    {/* <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="index-2.html">
          <img src="images/logo.svg" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
            <li className="nav-item">
              <a className="nav-link inactive" href="index-2.html">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="services.html">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="our-work.html">
                OUR WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="about.html">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
  <NavBar />
    <section className="hero-section-new" id="section_1">
      <div className="section-overlay"></div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-white mb-5-top century-head">Services</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="services-div-wrapper">
            <img
              src="images/frame-1.svg"
              style={{ height: '200px' }}
              alt="Frame"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img src="images/social-smm.svg" className="img-fluid" alt="Social Media Management" />
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className="text-pink mb-4 century-sub-head">Social Media Management</h2>
              <p className="text-black century">Discover the power of <b>strategic collaboration</b> with our social media management services.</p>
              <a className="text-pink" href="social-media.html">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className="text-pink mb-4 century-sub-head">YouTube Audience Development Support</h2>
              <p className="text-black century">Discover the power of <b>strategic collaboration</b> with our social media management services.</p>
              <a className="text-pink" href="youtube-audience.html">Know More</a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img src="images/social-yads.svg" className="img-fluid" alt="YouTube Audience Development Support" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img src="images/social-bsv.svg" className="img-fluid" alt="Branded Social Video" />
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className="text-pink mb-4 century-sub-head">Branded Social Video</h2>
              <p className="text-black century">Our approach to branded social video focuses on <b>storytelling</b> that reflects your brand's core values while capturing the attention of your audience.</p>
              <a className="text-pink" href="branded-media.html">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero-section-new bg1">
      <div className="section-overlay"></div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <p className="text-white cormorant-head">Have an Awesome Idea?<br />Let’s Discuss</p>
            <a className="btn custom-btn smoothscroll text-pink" href="#">Start Project</a>
          </div>
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="site-footer-top"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 pb-2">
            <img src="images/logo-footer.svg" alt="Logo" />

            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <img src="images/facebook.png" alt="Facebook" />
              </li>

              <li className="site-footer-link-item">
                <img src="images/instagram.png" alt="Instagram" />
              </li>

              <li className="site-footer-link-item">
                <img src="images/whatsapp.png" alt="WhatsApp" />
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <h5 className="site-footer-title mb-3 century">Services</h5>
          </div>

          <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
            <h5 className="site-footer-title mb-3 century">You can reach us at</h5>
            <p className="text-black d-flex century">
              <a href="tel: +919820240132" className="site-footer-link">
                (+91) 9820240132, 022 65180081
              </a>
            </p>

            <h5 className="site-footer-title mb-3 century">Email</h5>
            <p className="text-black d-flex century">
              <a href="mailto:hello@domyworkstudios.com" className="site-footer-link">
                hello@domyworkstudios.com
              </a>
            </p>

            <h5 className="site-footer-title mb-3 century">Address</h5>
            <p className="text-black d-flex century">
              302, Swastik Disa Corporate Park, Opp, Shreyas Cinema Road, LBS Marg, Ghatkopar West, Mumbai, Maharashtra, 400086.
            </p>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mt-5" style={{ textAlign: 'center' }}>
              <p className="copyright-text">
                ©FlicFloc Copyright 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
    </>
     
  )
}






export default  services;
