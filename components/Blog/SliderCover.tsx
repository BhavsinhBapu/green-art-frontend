import React from "react";
import Slider from "react-slick";
const SliderCover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="overview-area">
        <div className="overview-left ">
          <h2 className=" ">Tradex Blog</h2>
          <h4 className="blance-title ">
            aaa It is a long established fact that a reader will be distracted
          </h4>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="row SliderBlog">
            <div className="col-sm-6">
              <img
                className="h-100"
                src="/267-2676128_submitted-cryptocurrencies-transparent.png"
              />
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Special title treatment</h1>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row SliderBlog">
            <div className="col-sm-6">
              <img
                className="h-100"
                src="/267-2676128_submitted-cryptocurrencies-transparent.png"
              />
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Special title treatment</h1>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderCover;
