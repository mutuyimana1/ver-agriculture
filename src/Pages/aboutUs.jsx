import Footer from "../components/Footer"
import Header from "../components/Header"
import OurSteps from "../components/OurSteps"

const AboutUs = (() => {
  return (
    <>
      <Header />
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area d-flex  p-relative align-items-center" style={{ backgroundImage: 'url(../assets/img/bg/bdrc-bg.jpg)' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-left">
                  <div className="breadcrumb-title">
                    <h2>About Us</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* about-area */}
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="about-content s-about-content  wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                  <div className="about-title second-title pb-25">
                    <h5>About Us</h5>
                    <h2>We  Provide Environmental Solution</h2>
                  </div>
                  <p>Many of the problems are associated with poor management of environment and natural resources. The DEMP II was thus, inspired by the fact that local communities are more motivated to protect and sustainably use natural resources if they are directly involved in the planning and decision making process.

                  </p>
                  <p>For local governments, strengthening environmental management capacity is important since environmental sustainability contributes to widening and increasing local revenue base, a key aspect of Rwanda’s decentralization process. The ecosystem restoration and protection is one of key priority for Environment and Natural Resources Sector in order to achieve EDPRS objective and Vision 2020 in Rwanda.
                    It is in that regard DEMP II in collaboration with Rwamagana district implemented a project to rehabilitate Mugesera lakeshores </p>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                  <img src="../assets/img/features/about_img_03.jpg" alt="img" />
                  <div className="about-text second-about">
                    <img src="../assets/img/features/about-play.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* testimonial-area */}
        <section className="testimonial-area pt-5 pb-100 p-relative fix" style={{ background: 'url(../assets/img/bg/services-bg.png)', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb-50 wow fadeInDown animated text-center" data-animation="fadeInDown" data-delay=".4s">
                  <h5>Our Testimonial</h5>
                  <h2>
                    What Our Clients Says
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-active grid grid-cols-4 gap-5">
                  <div className="single-testimonial">
                    <div className="testi-author">
                      <img src="../assets/img/testimonial/testi_avatar.png" alt="img" />
                      <div className="ta-info">
                        <h6>Jina Nilson</h6>
                        <span>Client</span>
                      </div>
                    </div>
                    <p className="pt-2 pb-4"><img src="../assets/img/testimonial/review-icon.png" alt="img" /></p>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                    <div className="qt-img">
                      <img src="../assets/img/testimonial/qt-icon.png" alt="img" />
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testi-author">
                      <img src="../assets/img/testimonial/testi_avatar_02.png" alt="img" />
                      <div className="ta-info">
                        <h6>Braitly Dcosta</h6>
                        <span>Client</span>
                      </div>
                    </div>
                    <p className="pt-2 pb-4"><img src="../assets/img/testimonial/review-icon.png" alt="img" /></p>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                    <div className="qt-img">
                      <img src="../assets/img/testimonial/qt-icon.png" alt="img" />
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testi-author">
                      <img src="../assets/img/testimonial/testi_avatar.png" alt="img" />
                      <div className="ta-info">
                        <h6>Jina Nilson</h6>
                        <span>Client</span>
                      </div>
                    </div>
                    <p className="pt-2 pb-4"><img src="../assets/img/testimonial/review-icon.png" alt="img" /></p>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                    <div className="qt-img">
                      <img src="../assets/img/testimonial/qt-icon.png" alt="img" />
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testi-author">
                      <img src="../assets/img/testimonial/testi_avatar_02.png" alt="img" />
                      <div className="ta-info">
                        <h6>Braitly Dcosta</h6>
                        <span>Client</span>
                      </div>
                    </div>
                    <p className="pt-2 pb-4"><img src="../assets/img/testimonial/review-icon.png" alt="img" /></p>
                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                    <div className="qt-img">
                      <img src="../assets/img/testimonial/qt-icon.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* newslater-area */}
        <section className="newslater-area pt-120 pb-200" style={{ background: 'url(../assets/img/bg/newslater-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="section-title newslater-title">
                  <div className="text">
                    <h5>Newsletter</h5>
                    <h2>Join Us &amp; Get Special Offers From Us</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                  <div className="form-group p-relative">
                    <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." defaultValue required />
                    <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                  </div>
                  {/* /Form-email */}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* newslater-aread-end */}
        {/* video-area */}
        <section id="video" className="video-area p-relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="s-video-wrap" style={{ backgroundImage: 'url(../assets/img/bg/video-img2.png)' }}>
                  <div className="s-video-content text-center">
                    <h6><a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="popup-video mb-50"><img src="../assets/img/bg/play-button2.png" alt="circle_right" /></a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* video-area-end */}
        <section className="team-area2 fix p-relative pt-120 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-relative">
                <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                  <h5>Our Team</h5>
                  <h2>
                    Our Expert Team
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <a href="team-single.html"><img src="../assets/img/team/team01.jpg" alt="img" /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4><a href="team-single.html">Howard Holmes</a></h4>
                    <p>CEO &amp; Founder</p>
                    <div className="team-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li> <a href="#"><i className="fab fa-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <a href="team-single.html"><img src="../assets/img/team/team02.jpg" alt="img" /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4><a href="team-single.html">Ella Thompson</a></h4>
                    <p>Dcfarm Team</p>
                    <div className="team-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li> <a href="#"><i className="fab fa-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <a href="team-single.html"><img src="../assets/img/team/team03.jpg" alt="img" /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4><a href="team-single.html">Vincent Cooper</a></h4>
                    <p>Dcfarm Team</p>
                    <div className="team-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li> <a href="#"><i className="fab fa-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <a href="team-single.html"><img src="../assets/img/team/team04.jpg" alt="img" /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4><a href="team-single.html">Danielle Bryant</a></h4>
                    <p>Dcfarm Team</p>
                    <div className="team-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li> <a href="#"><i className="fab fa-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* steps-area */}
        <OurSteps/>
        {/* steps-area-end */}
        {/* brand-area */}
        <div className="brand-area pb-120">
          <div className="container">
            <div className="row brand-active">
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo2.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo3.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo4.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo5.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo2.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo3.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo4.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="../assets/img/brand/b-logo5.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
        <Footer/>
      </main>

    </>
  )
})
export default AboutUs