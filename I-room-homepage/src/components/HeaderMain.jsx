import styles from "./HeaderMain.module.scss";
import ArrowIcon from "../assets/icon-arrow.svg"
import ArrowLeftIcon from "../assets/icon-angle-left.svg"
import ArrowRightIcon from "../assets/icon-angle-right.svg"

import ImageOne from "../assets/desktop-image-hero-1.jpg"
import ImageOneMobile from "../assets/mobile-image-hero-1.jpg"

import ImageTwo from "../assets/desktop-image-hero-2.jpg";
import ImageTwoMobile from "../assets/mobile-image-hero-2.jpg";

import ImageThree from "../assets/desktop-image-hero-3.jpg";
import ImageThreeMobile from "../assets/mobile-image-hero-3.jpg";
import { useState } from "react";

const Data = [
  {
    desktop: ImageOne,
    mobile: ImageOneMobile,
    title: "Discover innovative ways to decorate",
    content: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktop: ImageTwo,
    mobile: ImageTwoMobile,
    title: "We are available all across the globe",
    content: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktop: ImageThree,
    mobile: ImageThreeMobile,
    title: "Manufactured with the best materials",
    content: "   Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  }
]

export function HeaderMain() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide(oldSlideNumber => {
      const nextSlideNumber = oldSlideNumber + 1;
      if(nextSlideNumber >= Data.length) return 0;
      return nextSlideNumber;
    })
  };
  const handlePrev = () => {
    setCurrentSlide(oldSlideNumber => {
      const prevSlideNumber = oldSlideNumber - 1;
      if(prevSlideNumber < 0) return Data.length - 1;
      return prevSlideNumber;
    })
  };

  const showMobileImage = window.matchMedia('(max-width: 800px)').matches;
    return <main className={styles.main}>
    <figure 
    className={styles.main__image}
    >
      {
        showMobileImage ? 
        <img src={Data[currentSlide].mobile} alt="Image Mobile" /> :
        <img src={Data[currentSlide].desktop} alt="Image" />
      }

      {
        showMobileImage && 
        <div 
          className={styles.main__buttons}
        >
          <button onClick={handlePrev}>
            <img src={ArrowLeftIcon} alt="Previous" />
          </button>
          <button onClick={handleNext}>
          <img src={ArrowRightIcon} alt="Next" />
          </button>
        </div>
      }
    </figure>
    <div className={styles.main__content}>
      <div className={styles["main__content--container"]}>
        <h2 className={styles["main__content--title"]}>
          {Data[currentSlide].title}
        </h2>
        <p className={styles["main__content--paragraph"]}>
          {
            Data[currentSlide].content
          }
        </p>
        <p className={styles["main__content--cta"]}>
          SHOP NOW 
          <img src={ArrowIcon} alt="Shop Now"/>
        </p>
      </div>
      {!showMobileImage && 
      <div 
        className={styles.main__buttons}
        style={{
          bottom: "0",
          left: "0"
        }}
      >
        <button onClick={handlePrev}>
          <img src={ArrowLeftIcon} alt="Previous" />
        </button>
        <button onClick={handleNext}>
        <img src={ArrowRightIcon} alt="Next" />
        </button>
      </div>}
    </div>
  </main>;
}