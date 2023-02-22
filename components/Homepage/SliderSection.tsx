import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const SliderSection = ({
  bannerListdata,
  landing,
  announcementListdata,
}: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {bannerListdata.length > 0 &&
        parseInt(landing?.landing_second_section_status) === 1 && (
          <section className="about-area">
            <div className="container">
              <Slider {...settings}>
                {bannerListdata?.map((item: any, index: number) => (
                  <div className="single-banner" key={index}>
                    <Link href={`/banner/${item.slug}`}>
                      <img
                        src={item.image}
                        alt="about-image-phone"
                        className="slider-image-class"
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
              <div className="about-info">
                {announcementListdata?.map((item: any, index: number) => (
                  <div className="single-info" key={index}>
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mirror css-1w66k1s"
                      >
                        <path
                          d="M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z"
                          fill="currentColor"
                        />
                      </svg>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default SliderSection;
