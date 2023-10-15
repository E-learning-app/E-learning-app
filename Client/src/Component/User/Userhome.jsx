import React, { useState } from 'react';

const Userhome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      imgSrc: "https://bigblue.academy/images/image/blog/python-vs-javascript-which-language-should-you-learn-first/pythonvsjavascript.jpeg",
      alt: 'Motorbike Smoke',
      label: 'First slide label',
      content: 'Some representative placeholder content for the first slide.',
    },
    {
      imgSrc: "https://cxl.com/wp-content/uploads/2019/09/image3.png",
      alt: 'Mountaintop',
      label: 'Second slide label',
      content: 'Some representative placeholder content for the second slide.',
    },
    {
      imgSrc: "https://codersera.com/blog/wp-content/uploads/2021/02/1_a2NgJE2EnT1P45RNCm9jDQ.jpeg",
      alt: 'Woman Reading a Book',
      label: 'Third slide label',
      content: 'Some representative placeholder content for the third slide.',
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselDarkVariant" className="relative   flex items-center  h-1/4 " style={{ marginTop: '300px' }}>
      <div className="relative  overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full ${
              index === activeIndex ? '' : '!transform-none opacity-0'
            } transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active={index === activeIndex}
          >
            <img src={slide.imgSrc} className="block w-full h-full" alt={slide.alt} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
        onClick={handleNextClick}
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Userhome;
