import moment from "moment";
import Link from "next/link";
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
    <div>
      <div className="">
        <h2>Tradex Blog</h2>
        <p>
          Stay up to date with the latest stories and commentary brought to you
          by Binance, the world's leading blockchain and crypto ecosystem.
        </p>
      </div>
      <hr />
      <Slider {...settings}>
        {featuredblogs.map((featuredblog: any) => (
          <Link href={"/blog/" + featuredblog?.post_id}>
            <div className="row">
              <div className="col-md-5">
                <img className="SliderBlog" src={featuredblog?.thumbnail} />
              </div>
              <div className="col-md-7">
                <h1 className="card-title">{featuredblog?.title}</h1>
                <h6>
                  {moment(featuredblog?.createdAt)
                    .subtract(1, "days")
                    .calendar()}
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCover;
