import React from 'react'
import NavBar from "@/app/components/NavBar";
const home = () => {
  return (
    <div>
      <div className='homeimage'>  
    <main>
       <NavBar />
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>
        <hr />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <p className="text-white cormorant-head home_p">Helping you reach<br />the Right Audience</p>

              <a className="btn custom-btn smoothscroll" href="#">
                Contact
              </a>
              <a className="btn custom-border-btn smoothscroll" href="services.html">
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="home-div-wrapper">
              <img src="images/frame-3.png" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    </div>
  )
}

export default home