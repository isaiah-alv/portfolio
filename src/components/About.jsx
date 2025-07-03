// src/components/About.jsx
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView.js";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About({ onOpenContact }) {
  const [ref, inView] = useInView(0.2);
  
  const buttonClass =
    "bg-slate-300 dark:bg-slate-700 text-black dark:text-stone-200 text-xs py-1.5 px-3 rounded font-roboto font-normal hover:bg-slate-400 dark:hover:bg-slate-600 hover:opacity-90 transition border border-slate-300 dark:border-slate-600";

  return (
    <motion.section
      id="intro"
      ref={ref}
      className="mt-6 flex items-center justify-px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row-reverse items-center max-w-4xl w-full">
        <img
          src="/assets/animoji.png"
          alt="Isaiah Alviola"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover md:ml-8 mb-6 md:mb-0"
        />

        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-4xl font-rubik text-black dark:text-white  mb-2">
            isaiah alviola
          </h1>
          <div className="text-base text-gray-700 dark:text-gray-300 mb-6 font-roboto">
            <p>Cybersecurity Student based in New Jersey. </p>
            <p className="mt-2">I enjoy building ideas with tech, learning new things, and watching sports. </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-5 justify-start">
            <a
              href="/assets/ALVIOLA_ISAIAH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Open Resume
            </a>
            <button
              type="button"
              className={buttonClass}
              onClick={onOpenContact}
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-4 text-lg text-gray-400 dark:text-gray-500 ">
            <a
              className="hover:text-lime-500 dark:hover:text-red-400 transition-colors"
              href="https://github.com/isaiah-alv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              className="hover:text-lime-500 dark:hover:text-red-400 transition-colors"
              href="https://www.linkedin.com/in/isaiahalv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
