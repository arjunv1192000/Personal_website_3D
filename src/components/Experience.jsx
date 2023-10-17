import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWarapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperiencesCard=({experiences})=>(
  <VerticalTimelineElement
  contentStyle={{background:'#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experiences.date}
  iconStyle={{background:experiences.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
      src={experiences.icon}
      alt={experiences.company_name}
      className="w-[60%] h-[60%] object-contain"
      />

    </div>
  }
  > 
    <div>
    <h3 className='text-white text-[24px] font-bold'>{experiences.title}</h3>
    <p className='text-secondary text-[16px] font-semibold'style={{margin:0}}>{experiences.company_name}</p>
    </div>
   

    

  </VerticalTimelineElement>

)

const Experience = () => {
  return (
   <> 
   <motion.div variants={textVariant()}>
   <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
    <h2 className={styles.sectionHeadText}>Education</h2>

   </motion.div>
   <div className='mt-20 flex flex-col'>
    <VerticalTimeline>
    {experiences.map((experiences,index)=>(
      <ExperiencesCard key={experiences} experiences={experiences} />

    ))} 

    </VerticalTimeline>

   </div>
   </>
  ) 
}

export default SectionWarapper(Experience,"experience") 