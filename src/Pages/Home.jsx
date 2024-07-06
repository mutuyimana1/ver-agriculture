
import { React, useState } from "react"
import Header from "../components/Header"
import Coursel from "../components/Coursel"
import Footer from "../components/Footer"
import Activities from "../components/Activities"
import { ProjectsData, ProjectsErosionData, ProjectsForestData, Services } from "../assets/Data/Activities"
import AboutSection from "../components/AboutSection"
import OurSteps from "../components/OurSteps"
import { GalleryData } from "../assets/Data/Gallery"
const Home = (() => {
  const [projectCategory, setProjectCategory] = useState("all")
  return (
    <>
      <div className="mainContainer">

        {/* Cursor */}
        <div className="cursor js-cursor" />

        {/* header */}
        <Header />
        {/* header-end */}

        {/* main-area */}
        <main>

          {/* slider-area */}
          <Coursel />
          {/* slider-area-end */}

          {/* service-area */}
          <section className="service-details-three p-relative fix">
            <div className="container">
              <div className="row sbox">
                {Services?.map((el) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                        <div className="sr-contner">
                          <div className="icon">
                            <i className="far fa-leaf" />
                          </div>
                          <div className="text">
                            <h3> <a href="services.html" >{el?.name}</a> </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          {/* service-area-end */}

          {/* about-area */}
          <section className="about-area about-p pt-120 pb-120 p-relative fix">
            <AboutSection />
          </section>
          {/* about-area-end */}

          {/* Activities Section*/}
          <section id="services-05" className="services-05 pt-120 pb-100 p-relative fix" style={{ background: 'url(../assets/img/bg/services-bg.png)', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row justify-content-center align-items-center center-align">
                <div className="col-lg-6 col-md-12">
                  <div className="section-title text-center mb-20 wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>What we Did</h5>
                    <h2>
                      Vie et Environment &amp; forest management
                    </h2>
                  </div>
                </div>
              </div>
              <Activities />
            </div>
          </section>
          {/* Activities Section End */}

          {/* steps-area */}
          <OurSteps />
          {/* steps-area-end */}

          {/* newslater-area */}
          <section className="newslater-area pt-120 pb-200" style={{ background: 'url(../assets/img/bg/newslater-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title newslater-title wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                    <div className="text">
                      <h5>Newsletter</h5>
                      <h2>Join Us &amp; Get Special Offers From Us</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                    <div className="form-group p-relative">
                      <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." defaultValue required />
                      <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* newslater-aread-end */}

          {/* video-area */}
          <section id="video" className="video-area p-relative wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="s-video-wrap" style={{ backgroundImage: 'url(../assets/img/bg/video-img2.png)' }}>
                    <div className="s-video-content text-center">
                      <h6><a href="https://www.youtube.com/watch?v=aGg_eRkbaAc" target="blank" className="popup-video mb-50"><img src="../assets/img/bg/play-button2.png" alt="circle_right" /></a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* video-area-end */}

          {/* gallery-area */}
          <section id="portfolio" className="pt-120 pb-90">
            <div className="container">
              <div className="portfolio ">
                <div className="row align-items-end mb-50">
                  <div className="col-lg-12">
                    <div className="section-title text-center wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
                      <h5>Explore Projects</h5>
                      <h2>
                        Our Recent Projects
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row align-items-end mb-50">
                  <div className="col-lg-12">
                    <div className="my-masonry text-center wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                      <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={() => setProjectCategory("all")}>View All</button>
                        <button data-filter=".financial" onClick={() => setProjectCategory("erosion")}>Erosion</button>
                        <button data-filter=".banking" onClick={() => setProjectCategory("vegetables")}>Vegetables</button>
                        <button data-filter=".insurance" onClick={() => setProjectCategory("forest")}>Forest </button>
                      </div>
                    </div>
                  </div>
                </div>
                {projectCategory === "all" && <div className="row">
                  {ProjectsData?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2">
                              <a href="#"><img src="../assets/img/blog/blog7.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content2">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.createdBy}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4><a href="#">{el?.title}</a></h4>
                              <p>{el?.discriptions}</p>
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "erosion" && <div className="row">
                  {ProjectsErosionData?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2">
                              <a href="#"><img src="../assets/img/blog/blog7.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content2">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.createdBy}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4><a href="#">{el?.title}</a></h4>
                              <p>{el?.discriptions}</p>
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "vegetables" && <div className="row">
                  {ProjectsForestData?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2">
                              <a href="#"><img src="../assets/img/blog/blog7.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content2">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.createdBy}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4><a href="#">{el?.title}</a></h4>
                              <p>{el?.discriptions}</p>
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "forest" && <div className="row">
                  {ProjectsData?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2">
                              <a href="#"><img src="../assets/img/blog/blog7.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content2">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.createdBy}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4><a href="#">{el?.title}</a></h4>
                              <p>{el?.discriptions}</p>
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}

              </div>
            </div>
          </section>
          {/* gallery-area-end */}
          <section className="bg-zinc-50 overflow-hidden py-5" style={{ background: 'url(../assets/img/bg/services-bg.png)', backgroundRepeat: 'no-repeat' }}>
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                <h5>Gallery</h5>
              </div>
            </div>
            <div className="w-full px-8 md:pxs-12 mx-auto  h-[50vh] flex flex-col justify-center flex-wrap pb-5">

              <div className="flex flex-col sm:flex-row mx-auto ">
                {/*- Starts component */}
                {GalleryData?.map((el) => {
                  return (
                    <a href="#_">
                      <img src={el?.img} className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" /> </a>
                  )
                })}

                {/*- Ends component */}
              </div>
            </div>
          </section>

          {/* blog-area-end */}
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
              </div>
            </div>
          </div>

          {/* brand-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer */}

      </div>
      <Footer />

    </>
  )
})
export default Home