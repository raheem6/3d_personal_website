import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "I'm Web Developer",
      "I'm Musician",
      "I'm currently a Computer Science major.",
      "GuyWhoLovesHiking.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const scrollDownClass = isMobile ? "text-xs" : "";
  const arrowAnimationClass = isMobile ? "animate-bounce-down" : "animate-bounce";

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Raheem</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white ${scrollDownClass}`}
          >
            {text}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a
          href="#about"
          className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
        >
          <div className={`group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75 ${arrowAnimationClass}`}>
            <div className="bg-white h-3 w-1 rounded-full mt-[10px]"></div>
          </div>
          <p className={scrollDownClass}>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
