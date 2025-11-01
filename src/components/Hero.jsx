import { Hero_content } from "../constants";
import profile from "../assets/images/logo/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center">
        {/* LEFT SECTION - TEXT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white pb-10 text-5xl lg:text-7xl font-semibold tracking-tight lg:mt-16 mx-9"
            >
              Hello,<br/><br/> I'm {" "}{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent inline-block ml-8">
                Kaushal
              </span>
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:text-4xl text-slate-300 font-light mx-9"
            >
              Software Developer
            </motion.span>
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center mt-10 lg:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center items-center"
          >
            <img
              src={profile}
              alt="profile"
              className="rounded-full w-56 h-56 lg:w-72 lg:h-72 object-cover 
  border-4 border-transparent 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
  p-[4px] shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
