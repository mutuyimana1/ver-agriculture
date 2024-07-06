import Footer from "../components/Footer"
import Header from "../components/Header"

const Projects=()=>{
    return(
        <>
        <Header/>
      <main>
  {/* breadcrumb-area */}
  <section className="breadcrumb-area d-flex  p-relative align-items-center" style={{backgroundImage: 'url(../assets/img/bg/bdrc-bg.jpg)'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-12 col-lg-12">
          <div className="breadcrumb-wrap text-left">
            <div className="breadcrumb-title">
              <h2>Projects</h2>    
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
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
  {/* services-five-area */}
  <section id="services-05" className="services-05 pt-120 pb-100 p-relative fix">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-08.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">
                <h4>Agriculture Products </h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-09.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">
                <h4><a href="single-service.html">Fresh Vegetables</a> </h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-10.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">
                <h4><a href="single-service.html">Organic Products</a></h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>                          
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-11.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">
                <h4><a href="single-service.html">Ecological Farming</a> </h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-05.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">                             
                <h4><a href="single-service.html">Dairy Products</a> </h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="services-box-05 mb-30 hover-zoomin">
            <div className="services-icon-05">
              <a href="single-service.html"><img src="../assets/img/bg/services-13.jpg" alt="icon01" /></a>
            </div>
            <div className="services-content-05">
              <div className="icon">
                <h4><a href="single-service.html">Fresh Berries</a> </h4>
              </div>
              <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea such and asser sharing listically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* services-three-area */}	
  {/* brand-area */}
  <div className="brand-area pb-120">
    <div className="container">
      <div className="row brand-active">
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
</main>

        <Footer/>
        </>
    )
}
export default Projects