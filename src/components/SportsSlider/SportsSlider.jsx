import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cricketIcon from '../../assets/img/cricket.svg';
import footballIcon from '../../assets/img/football.svg';
import kabbadiIcon from '../../assets/img/kabbadi.svg';
import bgImage from '../../assets/img/sports-bg.png'; 
import arrowLeft from '../../assets/img/left-arrow.svg';
import arrowRight from '../../assets/img/right-arrow.svg';

const sports = [
  {
    id: 1,
    icon: cricketIcon,
    title: 'Cricket',
    description:
      'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard (20-meter) pitch with a wicket at each end, each comprising two bails balanced.',
  },
  {
    id: 2,
    icon: footballIcon,
    title: 'Football',
    description:
      'Football is a sport played between two teams of 11 players each. The goal of the game is to score more goals than the other team by kicking the ball into their net.',
  },
  {
    id: 3,
    icon: kabbadiIcon,
    title: 'Kabbadi',
    description:
      'Two teams of seven players each take turns sending a "raider" into the other teams half to tag as many opponents as possible without being tackled. ',
  },
];

export default function SportsSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-cover bg-center py-12 md:py-20 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <div className="text-center sm:text-left mt-5">
            <h2 className="text-5xl md:text-6.5xl leading-tight font-normal text-white font-jersey">
              SPORTS WE SERVE
            </h2>
            <div className="w-w-120 h-1 bg-orange mt-4 mx-auto sm:mx-0" />
          </div>

          <div className="flex space-x-4 mt-6 sm:mt-0">
            <button
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={arrowLeft} alt="Prev" className="w-5 h-5" />
            </button>
            <button
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={arrowRight} alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {sports.map(({ id, icon, title, description }) => (
              <div key={id} className="px-6">
                <div className="relative pt-8">
                  <div className="absolute bg-white border border-[#939393] rounded-[31.5px] flex items-center justify-center z-10 px-14 py-3 top-[35px] left-1/2 transform -translate-x-1/2">
                    <img src={icon} alt={title} className="min-w-10 min-h-10" />
                  </div>

                  <div className="bg-white rounded-3xl border border-[#939393] pt-[60px] pb-8 px-6 mx-auto relative w-full  h-[304px] mt-8">
                    <div className="text-center">
                      <div className="inline-block mb-6">
                        <h3 className="text-3.5xl leading-tight font-bold text-blue">
                          {title}
                        </h3>
                      </div>
                      <p className="text-gray text-lg leading-7 font-medium">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
