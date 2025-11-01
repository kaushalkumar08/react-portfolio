import { About_text } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 text-center">
      <h1 className="my-20 text-5xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="w-full px-10"
      >
        <p className="text-2xl leading-relaxed text-neutral-200 text-justify">
          {About_text}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
