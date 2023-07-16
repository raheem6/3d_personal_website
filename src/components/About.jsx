import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w03x1 leading-[30px]"
      >
      I'm passionate about computer science and helping people with their queries related to it. Currently, I'm searching for an internship opportunity on Handshake and Linkedin to enhance my skills and gain practical experience in the field. I have experience in programming languages such as Java and C++, version control tools like Git and GitHub, and front-end web development with HTML, CSS, and JavaScript. Additionally, I'm multilingual and fluent in English and Arabic. Apart from my technical expertise, I'm also interested in outdoor activities like hiking, traveling, walking, and building gaming PCs.
      </motion.p>
    </>
  )
}

export default About