import React from "react";
function Sidebar(){
    return(
        <>
        
         <header className="header-area2">
      <div className="mheader-bottom header-menu header-sticky sticky2-bg">
          <div className="custom-container">
              <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                      <div className="header__left d-flex align-items-center justify-content-between justify-content-lg-start">
                          <div className="header__action-2 mr-80">
                              <ul>
                                  <li>
                                      <a className="sidebar-toggle" href="javascript:void(0)">
                                          <i className="fas fa-chess-board"></i> Menu
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div className="logo-1">
                              <a href="index.html">
                                  <img src="assets/img/logo/logo-black.png" alt="logo" />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 d-none d-lg-block">
                      <div className="header-bottom-right d-flex align-items-center justify-content-end ">
                          <div className="blloo d-none d-xl-block">
                              <div className="header__widget d-flex align-items-center ">
                                  <div className="header__widget--icon">
                                      <i className="flaticon-location"></i>
                                  </div>
                                  <div className="header__widget--text">
                                      <span>Location</span>
                                      <h4>28/4 Palmal, London</h4>
                                  </div>
                              </div>
                          </div>
                          <div className="header__widget d-flex align-items-center">
                              <div className="header__widget--icon header__widget--icon__phone">
                                  <i className="flaticon-phone-call"></i>
                              </div>
                              <div className="header__widget--text">
                                  <span>Contact us</span>
                                  <h4><a href="tel:+44(650)5522-7">+44 (650) 5522-7</a></h4>
                              </div>
                          </div>
                          <div className="header__widget d-flex align-items-center">
                              <div className="header__widget--icon">
                                  <i className="flaticon-letter"></i>
                              </div>
                              <div className="header__widget--text">
                                  <span>Email us</span>
                                  <h4><a href="/cdn-cgi/l/email-protection#3c55525a537c51595b5d125f5351"><span className="__cf_email__" data-cfemail="2b42454d446b464e4c4a05484446">[email&#160;protected]</span></a></h4>
                              </div>
                          </div>
                          <div className="mheader-button ml-60 mt-10">
                              <a href="contact.html" className="theme-btn home2-btn btn-before"><i className="fal fa-angle-double-right"></i>Get Quote</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="offcanvas-overlay"></div>
      <div className="sidebar__area">
          <div className="sidebar__wrapper">
              <div className="sidebar__top d-flex align-items-center mb-40">                
                  <div className="logo">
                      <a href="index.html">
                      <img src="assets/img/logo/logo-black.png" alt="logo" />
                      </a>
                  </div>
                  <div className="sidebar__close ml-50">
                      <button className="sidebar__close-btn sidebar-close">
                          <svg viewBox="0 0 22 22">
                              <path d="M12.41,11l5.29-5.29c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L11,9.59L5.71,4.29c-0.39-0.39-1.02-0.39-1.41,0
                              s-0.39,1.02,0,1.41L9.59,11l-5.29,5.29c-0.39,0.39-0.39,1.02,0,1.41C4.49,17.9,4.74,18,5,18s0.51-0.1,0.71-0.29L11,12.41l5.29,5.29
                              C16.49,17.9,16.74,18,17,18s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L12.41,11z"/>
                          </svg>
                      </button>
                  </div>
              </div>
              <div className="sidebar__content p-relative z-index-1">
                  <div className="sidebar__menu">
                      <div className="main-menu d-none">
                          <nav id="mobile-menu-2">
                              <ul>
                                  <li className="menu-item-has-children"><a href="index.html">Home</a>
                                      <ul className="sub-menu">
                                          <li><a href="index.html">Home 01</a></li>
                                          <li><a href="index-2.html">Home 02</a></li>
                                      </ul>
                                  </li>
                                  <li className="menu-item-has-children"><a href="#">PAGES</a>
                                      <ul className="sub-menu">
                                          <li><a href="about.html">About</a></li>
                                          <li><a href="team.html">Team</a></li>
                                          <li><a href="team-details.html">Team Details</a></li>
                                      </ul>
                                  </li>
                                  <li className="menu-item-has-children"><a href="services.html">Services</a>
                                      <ul className="sub-menu">
                                          <li><a href="services.html">Services</a></li>
                                          <li><a href="service-details.html">Service Details</a></li>
                                      </ul>
                                  </li>
                                  <li className="menu-item-has-children"><a href="project.html">Projects</a>
                                      <ul className="sub-menu">
                                          <li><a href="project.html">Projects</a></li>
                                          <li><a href="project-details.html">Projects Details</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </nav>
                      </div>                    
                      <div className="mobile-menu-2"></div>
                      <div className="contact-infos mb-30">
                          <div className="contact-list">
                              <h4>Contact Info</h4>
                              <ul>
                                  <li><i className="flaticon-location"></i>28/4 Palmal, London</li>
                                  <li><i className="flaticon-letter"></i><a href="/cdn-cgi/l/email-protection#85ecebe3eac5eee9e0ebe4f7abe6eae8"><span className="__cf_email__" data-cfemail="3b52555d547b565e5c5a15585456">[email&#160;protected]</span></a></li>
                                  <li><i className="flaticon-phone-call"></i><a href="tel:02(205)5552255">02 (205) 555 2255</a></li>
                              </ul>
                              <div className="sidebar__menu--social">
                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                  <a href="#"><i className="fab fa-instagram"></i></a>
                                  <a href="#"><i className="fab fa-google"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
        </>
    )
}
export default Sidebar;