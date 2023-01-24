import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NewsSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-12">
        <Slider {...settings}>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
