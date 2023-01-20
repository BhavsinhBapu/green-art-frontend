import moment from "moment";
import React from "react";
import Slider from "react-slick";
const SliderCover = ({ featuredblogs }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(featuredblogs, "featuredblogs");
  return (
    <div className="">
      <div className="overview-area mb-5 ml-2">
        <div className="overview-left ">
          <h2 className=" ">Tradex Blog</h2>
          <h4 className="blance-title ">
            aaa It is a long established fact that a reader will be distracted
          </h4>
        </div>
      </div>
      <Slider {...settings}>
        {featuredblogs.map((featuredblog: any) => (
          <div>
            <div className="row SliderBlog">
              <div className="col-sm-6">
                <img className="h-100" src={featuredblog?.thumbnail} />
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{featuredblog?.title}</h1>
                    <p className="card-text">
                      {moment(featuredblog?.createdAt)
                        .subtract(1, "days")
                        .calendar()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCover;
