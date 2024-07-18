import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import LazyLoadCarouselItem from './LazyLoadCarouselItem';
import './header.css';
import imageOne from "../assets/images/pexels-photo-9518144.jpeg";
import imageTwo from "../assets/images/pexels-photo-11670000.jpeg";
import imageThree from "../assets/images/pexels-tomfisk-4220574.jpg";
function Coursel() {
   
  return (
    <Carousel className='h-[100vh]'>
      <Carousel.Item>
        <LazyLoadCarouselItem className='courselOne' imageUrl={imageOne}>
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
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className='courselTwo' imageUrl={imageTwo}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">During this project &amp;  </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s">115,935 seedlings have been   <span> produced</span></h2>
                <div className="slider-btn mb-200">
                  <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate <i className="fal fa-wallet" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className='courselThree' imageUrl={imageThree}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">Seedling  produced &amp;  </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s"> both Muyira site <span> Cyabatsinga</span></h2>
                <div className="slider-btn mb-200">
                  <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate <i className="fal fa-wallet" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
    </Carousel>
  );
}

export default Coursel;
