import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import me from "../assets/me.jpg";

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
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9F7AEA] to-[#667EEA] opacity-20 blur-2xl" />
              <img 
                src={me} 
                alt="Raheem" 
                className="w-full h-full rounded-full object-cover border-8 border-[#ffffff08] transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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