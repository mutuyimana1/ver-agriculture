import Carousel from 'react-bootstrap/Carousel';

function Coursel() {
  return (
    <Carousel className='h-[100vh]'>
      <Carousel.Item style={{background: 'url(../assets/img/slider/slider-bg-3.jpg) no-repeat'}} className='h-full'>
        {/* <img src={ExampleCarouselImage} className='' /> */}
        <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
              <div className="col-lg-7 col-md-8">
                <div className="slider-content s-slider-content pt-[14rem]">
                  <h5 data-animation="fadeInUp" data-delay=".4s">Vie &amp; et Environment Rwanda</h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">We strengthen community adaptability and <span>resilience.</span></h2>
                  <div className="slider-btn mb-200">                                          
                    <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate <i className="fal fa-wallet" /></a>                                             
                  </div>        
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
              </div>
            </div>
      </Carousel.Item>
      <Carousel.Item style={{background: 'url(../assets/img/slider/pexels-andrey-niqi-19566-254178.jpg) no-repeat center'}}>
      {/* <img src={ExampleCarouselImage} /> */}
      <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
              <div className="col-lg-7 col-md-8">
                <div className="slider-content s-slider-content pt-[14rem]">
                  <h5 data-animation="fadeInUp" data-delay=".4s">During this project &amp;  </h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">115,935 seedlings have been   <span> produced</span></h2>
                  <div className="slider-btn mb-200">                                          
                    <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate <i className="fal fa-long-arrow-right" /></a>                                             
                  </div>        
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
              </div>
            </div>
      </Carousel.Item>
      <Carousel.Item style={{background: 'url(../assets/img/slider/pexels-joanjo-puertos-25432923-6746690.jpg) no-repeat bottom'}}>
      {/* <img src={ExampleCarouselImage} /> */}
      <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
              <div className="col-lg-7 col-md-8">
                <div className="slider-content s-slider-content pt-[14rem]">
                  <h5 data-animation="fadeInUp" data-delay=".4s">Seedling  produced &amp;  </h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s"> both Muyira site <span> Cyabatsinga</span></h2>
                  <div className="slider-btn mb-200">                                          
                    <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate <i className="fal fa-long-arrow-right" /></a>                                             
                  </div>        
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
              </div>
            </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Coursel;