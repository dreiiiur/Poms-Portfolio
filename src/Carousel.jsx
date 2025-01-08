import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set to true if you want navigation arrows
  };

  const slides = [
    {
      id: 1,
      url: "./src/assets/specs.png",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/800x400",
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/800x400",
      title: "Slide 3",
      description: "This is the third slide.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-4">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="mt-4 text-xl font-bold text-center">{slide.title}</h2>
            <p className="text-center text-gray-600">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
