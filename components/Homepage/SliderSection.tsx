import ImageComponent from "components/common/ImageComponent";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { TfiAnnouncement } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
const SliderSection = ({
  bannerListdata,
  landing,
  announcementListdata,
}: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    className: "center",
    // vertical: true,
    // slidesToShow: bannerListdata.length < 4 ? 1 : 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 360,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const notifiactionSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    className: "center",
    vertical: true,
    // slidesToShow: bannerListdata.length < 4 ? 1 : 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 360,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <section className="about-area">
        <div className="container">
          {announcementListdata?.length > 0 && (
            <div className="about-info mb-5">
              <Slider {...notifiactionSettings}>
                {announcementListdata?.map((item: any, index: number) => (
                  <div className="single-info" key={index}>
                    <Link href={`/announcement/${item.slug}`}>
                      <a>
                        <TfiAnnouncement />
                        {item.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          )}
          {bannerListdata.length > 0 &&
            parseInt(landing?.landing_second_section_status) === 1 && (
              <Slider {...settings}>
                {bannerListdata?.map((item: any, index: number) => (
                  <Link href={`/banner/${item.slug}`} key={index}>
                    <div className="single-banner">
                      <img
                        src={item.image}
                        alt="about-image-phone"
                        // className="slider-image-class"
                        style={{
                          height: "275px",
                          width: "100%",
                          borderRadius: "10px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </Link>
                ))}
              </Slider>
            )}
          {/* {announcementListdata?.length > 0 && (
            <div className="about-info">
              <Slider {...notifiactionSettings}>
                {announcementListdata?.map((item: any, index: number) => (
                  <div className="single-info" key={index}>
                    <Link href={`/announcement/${item.slug}`}>
                      <a>
                        <TfiAnnouncement />
                        {item.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          )} */}

          {/* {Number(landing?.landing_advertisement_section_status) === 1 && (
            <Link href={`${landing?.landing_advertisement_url ?? "#"}`}>
              <img
                src={
                  landing?.landing_advertisement_image
                    ? landing?.landing_advertisement_image
                    : "/tradex-cover.png"
                }
                className="cover-img cursor-pointer"
              />
            </Link>
          )} */}
        </div>
      </section>
    </div>
  );
};

export default SliderSection;
