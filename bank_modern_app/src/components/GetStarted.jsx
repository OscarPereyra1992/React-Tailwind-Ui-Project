import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const textClassName = hovered
    ? "font-poppins font-medium text-[18px] leading-[23.4px] text-gradient"
    : "font-poppins font-medium text-[18px] leading-[23.4px]";

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer relative overflow-hidden group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full relative`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className={textClassName}>
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className={textClassName}>
          <span className="text-gradient">Started</span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full rounded-full transition-colors duration-300 z-10 group-hover:duration-1500"></div>
      </div>
    </div>
  );
};

export default GetStarted;
