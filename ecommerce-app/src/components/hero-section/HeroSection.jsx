import { useState, useEffect } from "react";

import banner1 from "../../img/hero/hero-1.jpg";
import banner2 from "../../img/hero/hero-2.jpg";
//import banner3 from "../../img/hero/hero-3.jpg";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import "./hero-section.css";

const HeroSection = () => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImg !== 3) {
        setActiveImg(activeImg + 1);
      } else setActiveImg(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImg]);

  const nextSlide = () => {
    if (activeImg !== 3) {
      setActiveImg(activeImg + 1);
    } else setActiveImg(1);
  };

  const prevSlide = () => {
    if (activeImg !== 1) {
      setActiveImg(activeImg - 1);
    } else setActiveImg(3);
  };

  const moveDot = (img) => {
    setActiveImg(img);
  };

  return (
    <div className="hero-section">
      <div
        className={activeImg === 1 ? "slide gradient-bg active-slide" : "slide"}
        role="img"
        aria-label="apple support"
      >
        <div className="slide-content white-text">
          <h1>Game Like a Champ!</h1>
          <p>Build your dream PC today.</p>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Shop Now
          </Button>
        </div>
      </div>

      <div
        className={activeImg === 2 ? "slide active-slide" : "slide"}
        style={{ backgroundImage: `url(${banner2})` }}
        role="img"
        aria-label="apple support"
      >
        <div className="slide-content">
          <h1>Latest Apple Products</h1>
          <p>The apple products you love, in one place.</p>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Shop Now
          </Button>
        </div>
      </div>

      <div
        className={activeImg === 3 ? "slide active-slide" : "slide"}
        style={{ backgroundImage: `url(${banner1})` }}
        role="img"
        aria-label="low prices"
      >
        <div className="slide-content white-text">
          <h1>Specials on Laptops</h1>
          <p>Low prices on laptops or price match guarantee.</p>
          <Button type="button">Learn More</Button>
        </div>
      </div>

      <button type="button" className="btn-slide next" onClick={nextSlide}>
        &#10095;
      </button>
      <button type="button" className="btn-slide prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            className={
              activeImg === index + 1 ? "sliderDot active-dot" : "sliderDot"
            }
            onClick={() => moveDot(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
