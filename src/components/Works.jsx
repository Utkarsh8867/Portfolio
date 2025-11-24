import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const handleCardClick = (e) => {
    if (live_link && !e.target.closest('.github-button')) {
      window.open(live_link, "_blank", "noopener,noreferrer");
    }
  };

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    window.open(source_code_link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.5)}
      className='w-full sm:w-[360px]'
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 300,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full min-h-[520px] flex flex-col'
      >
        <div
          onClick={handleCardClick}
          className={`flex flex-col h-full ${live_link ? 'cursor-pointer' : ''}`}
        >
          {/* Image Section - Fixed Height */}
          <div className='relative w-full h-[230px] bg-black-200 flex-shrink-0'>
            <img
              src={image}
              alt={name}
              loading="lazy"
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={handleGitHubClick}
                className='github-button black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform z-10'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          {/* Content Section - Flexible */}
          <div className='mt-5 flex-grow flex flex-col'>
            <h3 className='text-white font-bold text-[18px] sm:text-[22px] min-h-[56px] line-clamp-2'>
              {name}
            </h3>
            <p className='mt-2 text-secondary text-[13px] sm:text-[14px] whitespace-pre-line leading-relaxed min-h-[90px]'>
              {description}
            </p>
          </div>

          {/* Tags Section - Fixed */}
          <div className='mt-4 flex flex-wrap gap-2 min-h-[32px]'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] sm:text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Live Link Indicator - Fixed */}
          <div className='mt-3 min-h-[20px]'>
            {live_link && (
              <p className='text-[#915EFF] text-[11px] sm:text-[12px] italic'>
                Click card to view live demo →
              </p>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project includes links to code repositories
          and live demos. Click on cards to view live demos, or click GitHub icon
          to see the code.
        </motion.p>
      </div>

      {/* Projects Grid - Show All with Consistent Heights */}
      <div className='mt-16 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
