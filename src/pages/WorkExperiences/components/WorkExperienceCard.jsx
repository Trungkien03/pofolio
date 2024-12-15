/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import styles from "./WorkExperienceCard.module.css";

const WorkExperienceCard = ({ date, title, description, images }) => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={styles.workExperienceCard}>
      <p className={styles.date}>{date}</p>
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.imageSlider}>
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1} - ${title}`}
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
