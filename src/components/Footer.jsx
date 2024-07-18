import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
const Footer =()=>{
    return(
        <>
        
        <footer className="footer-bg footer-p pt-150" style={{ backgroundColor: '#fff', backgroundImage: 'url(../assets/img/bg/footer-bg.png)', backgroundPosition: '0 0' }}>
          <div className="footer-top pb-70">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="footer-widget mb-30">
                   <div className=" flex gap-4 ">
              <div className="logo w-10 h-10">
                <Link to="/" className="w-full h-full"><img src={Logo} alt="logo" /></Link>
              </div>
              <h1 className="font-bold pt-8 text-xl text-white">Vie et Environment</h1>
            </div>
                    <div className="f-contact mt-6">
                      <p>Addressing soil erosion, destruction of agricultural land and deforestation, forest management.</p>
                    </div>
                    <div className="footer-social mt-10">
                      <Link toef="#"><i className="fab fa-facebook-f" /></Link>
                      <Link to="#"><i className="fab fa-instagram" /></Link>
                      <Link to="#"><i className="fab fa-twitter" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Our Links</h2>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about"> About</Link></li>
                        <li><Link to="/project"> Projects </Link></li>
                        <li><Link to="/contact"> Contact Us</Link></li>
                        <li><Link to="/gallery">Gallery </Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Contact Us</h2>
                    </div>
                    <div className="f-contact">
                      <ul>
                        <li>
                          <i className="icon fal fa-phone" />
                          <span><Link to="tel:+14440008888">+250-788-704-505</Link></span>
                        </li>
                        <li><i className="icon fal fa-envelope" />
                          <span>
                            <Link to="mailto:info@example.com">info@verrwanda.org</Link>
                          </span>
                        </li>
                        <li>
                          <i className="icon fal fa-map-marker-check" />
                          <span>Rutsiro,Rwanda,NR7,Kivumu Sector<br /> Western Province, Binyunju Cell <br/> tarafipolo Village</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Latest Post</h2>
                    </div>
                    <div className="recent-blog-footer">
                      <ul>
                        <li>
                          <div className="thum"> <img src="../assets/img/blog/s-blogimg-01.png" alt="img" /></div>
                          <div className="text"> <Link to="#">Nothing impossble to need hard work</Link>
                            <span>7 March, 2020</span></div>
                        </li>
                        <li>
                          <div className="thum"> <img src="../assets/img/blog/s-blogimg-02.png" alt="img" /></div>
                          <div className="text"> <Link to="#">Nothing impossble to need hard work</Link>
                            <span>7 March, 2020</span></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  Copyright © Vie Et Environnement Rwanda ©2024 . All rights reserved.
                </div>
                <div className="col-lg-6 text-right text-xl-right">
                  <ul>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms Of Service</Link></li>
                    <li><Link to="#">Legal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer