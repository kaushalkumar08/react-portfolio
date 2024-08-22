import reacti  from "../assets/images/icons/reacti.png";
import pythoni  from "../assets/images/icons/python.png";
import cicon from "../assets/images/icons/c++.png";
import jsi  from "../assets/images/icons/jsi.png";
import html from "../assets/images/icons/html.png";
import tailwand from "../assets/images/icons/tailwand.png";
import sql  from "../assets/images/icons/sql.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y: -100},
    animate : {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial = {{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}} 
        initial = {{opacity:0, x:-100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={reacti} alt="React Icon" className="w-16 h-16" /> 
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={pythoni} alt="Python Icon" className="w-16 h-16" /> 
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={cicon} alt="C++ Icon" className="w-16 h-16" /> 
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={jsi} alt="JS Icon" className="w-16 h-16" /> 
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={html} alt="HTML Icon" className="w-16 h-16" /> 
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={tailwand} alt="TailWand Icon" className="w-16 h-16" /> 
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial = "initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={sql} alt="SQL Icon" className="w-16 h-16 text-cyan-400" /> 
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies
