import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { sectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { Duncan, myWords } from "../constants"
import ResumeDoc from "../assets/Raheem_Resume_2025.pdf"

const Card = ({ index, text, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full select-none">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{text}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
)

const Resume = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div variants={textVariant()}>
          <p className={styles.sectionSubText}>For employers</p>
          <h2 className={styles.sectionHeadText}>My Resume.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center select-none`}>
        {myWords.map((myWords, index) => (
          <Card key={myWords.name} index={index} {...myWords} />
        ))}

        <div className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full">
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
            <img src={Duncan} alt="Duncan" className="w-[250px]" />

            <a href={ResumeDoc} download>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sectionWrapper(Resume, "resume")