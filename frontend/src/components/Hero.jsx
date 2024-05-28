import React from "react";
import Slider from "react-slick";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import Buttonv2 from "./ui/Buttonv2";

const heroList = [
  {
    id: 1,
    img: hero1,
    title1: "Big Sale",
    title2: "Only This Week",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ipsum temporibus beatae voluptatibus nesciunt impedit aut numquam animi iusto alias!",
  },
  {
    id: 2,
    img: hero2,
    title1: "60% Discount",
    title2: "For Men",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim autem velit laboriosam adipisci mollitia itaque hic veritatis qui odit officia!",
  },
  {
    id: 3,
    img: hero3,
    title1: "Cashback Up To 90%",
    title2: "For Women",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nostrum impedit cumque, iusto alias eum atque tempora explicabo! Veniam blanditiis quidem deleniti molestiae sed quibusdam illo ad a adipisci rerum.",
  },
];

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };
  return (
    <div className="py-8 md:py-16 overflow-hidden text-slate-800 dark:bg-dark dark:text-white duration-500">
      <Slider {...settings}>
        {heroList.map((hero) => (
          <div key={hero.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-5 ">
              <div className="grid justify-center">
                <img src={hero.img} alt="hero" className="max-h-max" />
              </div>
              <div className="flex flex-col gap-4 justify-center text-center sm:text-left">
                <h1 className="text-5xl sm:text-6xl font-bold  ">
                  <span className="text-emerald-700">{hero.title1}</span> {hero.title2}
                </h1>
                <p className="text-sm">{hero.description}</p>
                <a href="#products">
                  <Buttonv2>Buy Now!</Buttonv2>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
