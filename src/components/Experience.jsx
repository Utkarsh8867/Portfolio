import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (experience.certificate) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          className='flex justify-center items-center w-full h-full'
          onClick={handleClick}
          style={{ cursor: experience.certificate ? 'pointer' : 'default' }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      {!isFlipped ? (
        <div onClick={handleClick} style={{ cursor: experience.certificate ? 'pointer' : 'default' }}>
          <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p
              className='text-secondary text-[16px] font-semibold'
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
          {experience.certificate && (
            <button className='mt-4 bg-[#915EFF] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7c3aed] transition-colors'>
              View Certificate
            </button>
          )}
        </div>
      ) : (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={experience.certificate}
              alt={`${experience.title} Certificate`}
              className='w-full h-auto object-contain rounded-lg'
            />
            <p className='text-secondary text-[12px] mt-4 italic text-center'>
              Click to go back
            </p>
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications & Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
