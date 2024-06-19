import React from "react";
function Footer(){
    return(
        <>
        <footer>
  <div className="footer__area footer-bg pt-100 pb-50">
      
      <div className="container pt-70">
          <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="footer__widget footer-1 pr-100 mb-30 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                      <div className="footer__widget-logo mb-35">
                          <a href="/"><img style={{width:'8rem'}} src="assets/img/logo/logo-w.png" alt="footer-logo" /></a>
                      </div>
                      <p>We are a textile conglomerate striving continuously creating value in all aspects of
                        the textile industry</p>
                      <ul className="footer__social">
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>                        
                      </ul>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className=" footerComponent footer__widget footer-2 pl-60 mb-30 wow fadeInUp" data-wow-delay="0.6s">
                      <h3 className="footer__widget-title mb-35">
                          Contact Info
                      </h3>
                      <div className="footer__info">
                          <ul>
                              <li className="d-flex align-items-start">
                                  <div className="footer__info-icon mr-15">
                                     <i className="fal fa-map-marker-alt"></i>
                                  </div>
                                  <div className="footer__info-text">
                                     <span>2023, 2-A,/3,asaf ali road, turkman gate, 
                                        indraprastha, central delhi, new delhi, 110002<br />
                                        India</span>                                 
                                  </div>
                               </li>
                               <li className="d-flex align-items-start">
                                  <div className="footer__info-icon mr-15">
                                     <i className="far fa-envelope-open"></i>
                                  </div>
                                  <div className="footer__info-text">
                                     <h5>Email:</h5>
                                     <a href="/cdn-cgi/l/email-protection#a2cbccc4cde2cfc7c5c3d8cd8cc1cdcf"><span className="__cf_email__" data-cfemail="b7ded9d1d8f7dad2d0d6cdd899d4d8da">connect@dalmamills.com</span></a>
                                  </div>
                               </li>
                               <li className="d-flex align-items-start">
                                  <div className="footer__info-icon mr-20">
                                     <i className="fal fa-phone"></i>
                                  </div>
                                  <div className="footer__info-text">
                                     <h5>Phone: </h5>
                                     <a href="tel:02(205)5552255">02 (205) 555 2255</a>
                                  </div>
                               </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="footer__widget footer-3 pl-50 mb-30 wow fadeInUp" data-wow-delay="0.9s" style={{visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp'}}>
                      <h3 className="footer__widget-title mb-35">
                        Factory Address
                      </h3>
                        <ul>
                            <li className="d-flex align-items-start">
                                <div className="footer__info-icon mr-15">
                                    <i className="fal fa-map-marker-alt"></i>
                                </div>
                                <div className="footer__info-text">
                                    <span>chandi Bhata, mill road, berla, durg – 491332 chhattisgarh</span>                                 
                                </div>
                            </li>
                        </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  <div className="footer-coptright footer-copyright-bg pt-40 pb-40">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="footer__text">
                      <p style={{textAlign:'center'}}>Copyright ©2024 <a href="">Damla mills</a>. All Rights Reserved</p>
                  </div>
              </div>
              {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__cmenu text-end">
                      <a href="#">Terms & Conditions .</a>
                      <a href="services.html">Services .</a>
                      <a href="#">Privacy</a>
                  </div>
              </div> */}
          </div>
      </div>
  </div>
  </footer>
        </>
    )
}
export default Footer;