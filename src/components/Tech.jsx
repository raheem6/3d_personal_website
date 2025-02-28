import React from "react";
import { Tilt } from "react-tilt";

import { sectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechCard = ({ index, icon, name }) => {
  return (
    <Tilt className="w-28 h-28">
      <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-none">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-full py-5 flex justify-center items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" alt="technology-icon" />
        </div>
      </div>
      <p className="text-center mt-2 text-white">{name}</p>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology, index) => (
          <TechCard icon={technology.icon} key={technology.name} name={technology.name} index={index} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Tech, "tech");
