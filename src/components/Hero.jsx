import { motion } from "framer-motion"
import { styles } from '../styles'

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className={`${styles.paddingX} mt-20 inset-0 top-[250px] max-w-7.5xl flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center mt-20">
          <div className="w-5 h-5 rounded-full bg-[#4af41f]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="w-[3500px] bg-[white]/20 backdrop-blur-[5px] rounded-[20px] mt-24 pb-10">
          <h1 className={`${styles.heroHeadText} text-white ml-5 items-center mt-20`}>Take the First Step Towards<span className="text-[#4af41f]"> a Greener Future</span></h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100 ml-5`}>
          Calculate Your Carbon Footprint and Understand your impact on
          ​the environment<br/> and discover practical ways to reduce it.
          </p>
          <div className="bg-[#4af41f]/70 font-bold h-[50px] w-[200px] ml-5 mt-11 flex items-center justify-center rounded-[20px] ">
            <a href="login" className='  text-black '>Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
