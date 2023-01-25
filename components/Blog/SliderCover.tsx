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
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="mt-4">
      <Slider className="blogSlider" {...settings}>
        {featuredblogs?.map((featuredblog: any) => (
          <Link href={"/blog/" + featuredblog?.post_id}>
            <a>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img
                    className="SliderBlog rounded"
                    src={featuredblog?.thumbnail}
                  />
                </div>
                <div className="col-md-7 blogSliderText">
                  <h3 className="pt-4 pt-md-0">{featuredblog?.title}</h3>
                  {/* <p>
                    Grid trading is suitable for volatile and sideways markets
                    where prices fluctuate within a given range, as it aims to
                    profit from small price movements. In this article.
                  </p> */}
                  <small>
                    {moment(featuredblog?.createdAt)
                      .subtract(1, "days")
                      .calendar()}
                  </small>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCover;
