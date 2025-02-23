import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import me from "../assets/raheem.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Musician",
      "Computer Science Major",
      "Outdoor Enthusiast",
      "Creative Coder"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="mb-8 lg:mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-gray-100 mb-4">
                Hi, I'm <span className="text-[#9F7AEA] font-medium">Raheem</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                {text}
              </p>
            </div>

            <div className="hidden lg:block h-px w-32 bg-gradient-to-r from-[#9F7AEA] to-transparent mb-8" />

            <motion.p 
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bridging technology and creativity through elegant solutions and innovative development.
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <Tilt
            tiltEnable={true}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={500}
            className="relative w-[320px] h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#ff61e6] rounded-full animate-pulse blur-xl opacity-75" />
            
            <motion.div 
              className="relative green-pink-gradient p-1 rounded-full shadow-card overflow-hidden"
              animate={{
                background: [
                  'linear-gradient(45deg, #ff61e6, #915EFF)',
                  'linear-gradient(135deg, #915EFF, #ff61e6)',
                  'linear-gradient(225deg, #ff61e6, #915EFF)',
                  'linear-gradient(315deg, #915EFF, #ff61e6)',
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            >
              <div className="bg-tertiary rounded-full p-2 overflow-hidden">
                <img 
                  src={me} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-[#ffffff10] aspect-square" 
                />
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-3 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="animate-bounce flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Explore</span>
          <div className="w-px h-8 bg-gray-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;