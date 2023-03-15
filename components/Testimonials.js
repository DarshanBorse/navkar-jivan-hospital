import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Slider from "react-slick";
import {
  faCheckCircle,
  faChess,
  faUser,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faLayerGroup,
  faArrowDown,
  faArrowUp,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const SliderNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={`${className} ${
        className.includes("slick-disabled")
          ? "text-brandColorAccent hover:text-brandColorAccent opacity-50"
          : "text-brandColorAccent hover:text-brandColorAccent"
      } text-lg lg:text-xl  `}
      aria-hidden="true"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SliderPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={`${className} ${
        className.includes("slick-disabled")
          ? "text-brandColorAccent hover:text-brandColorAccent opacity-50"
          : "text-brandColorAccent hover:text-brandColorAccent"
      } text-lg lg:text-xl  `}
      aria-hidden="true"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const Testimonials = ({ className }) => {
  return (
    <div className={`py-16 lg:py-20 ${className ? className : ""}`}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5">
        <div className="m-auto text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mb-4 text-brandColorAccent">Get to Know our doctors</h3>
        </div>
        <div className="mt-8">
          <Slider {...settings}>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
