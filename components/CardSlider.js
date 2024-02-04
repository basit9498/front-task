import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./common/Heading";
import Cards from "./common/Cards";
import Button from "./common/Button";

const Nextarrow = ({ onClick }) => {
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <img src="/image/arrow-right.svg" className="w-8 h-6" alt="" />
    </button>
  );
};
const Prevarrow = ({ onClick }) => {
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-prev "
      onClick={onClick}
    >
      <img src="/image/arrow-left.svg " className=" w-8 h-6" alt="" />
    </button>
  );
};
const CardSlider = ({ renderList = [] }) => {
  const sliderSetting = {
    arrows: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    touchMove: false,
    slidesToScroll: 1,
    margin: "10px",
    speed: 600,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="my-14">
        <div className="flex items-center justify-between">
          <Heading text={"Convert from PDF"} />
          <Button className="bg-gray-200 text-textColor px-11" text="All" />
        </div>
        <div className="home-silder">
          <Slider {...sliderSetting}>
            {renderList?.map((item, index) => (
              <Cards key={index} data={item} bookmark={true} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CardSlider;
