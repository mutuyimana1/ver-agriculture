import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import LazyLoadCarouselItem from "./LazyLoadCarouselItem";
import "./header.css";
import imageOne from "../assets/images/IMG-20221114-WA0008.jpg";
import imageTwo from "../assets/images/IMG-20221114-WA0012.jpg";
import imageThree from "../assets/images/IMG-20221114-WA0014.jpg";
import { Link } from "react-router-dom";
function Coursel() {
  return (
    <Carousel className="h-[100vh]">
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselOne" imageUrl={imageOne}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">
                  Vie &amp; et Environment Rwanda
                </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s">
                  We strengthen community adaptability and{" "}
                  <span>resilience.</span>
                </h2>
                {/* <div className="slider-btn mb-200">
                  <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate </a>
                </div> */}
                <div className="second-header-btn flex">
                  <Link className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselTwo" imageUrl={imageTwo}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp bg-black/20 " data-delay=".4s">
                  During this project &amp;{" "}
                </h5>
                <h2 data-animation="fadeInUp bg-black/20 " data-delay=".4s">
                  115,935 seedlings have been <span> produced</span>
                </h2>
                <div className="second-header-btn flex">
                  <Link className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselThree" imageUrl={imageThree}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">
                  Seedling produced &amp;{" "}
                </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s">
                  {" "}
                  both Muyira site <span> Cyabatsinga</span>
                </h2>
                <div className="second-header-btn flex">
                  <Link className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
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
