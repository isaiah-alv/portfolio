import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView.js';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function PortfolioItem({
  title,
  imgUrl,
  stack,
  description,
  link,
  index,
}) {
  const [ref, inView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300 group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-40 object-cover border-b border-slate-200 dark:border-slate-700"
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-white dark:bg-slate-800 rounded-full p-1 shadow hover:bg-lime-500 dark:hover:bg-red-400 transition-colors z-10"
            title="Open project"
            aria-label="Open project"
          >
            <OpenInNewIcon fontSize="small" className="text-gray-500 group-hover:text-black dark:group-hover:text-white" />
          </a>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-base font-rubik mb-2 text-black dark:text-white">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-roboto px-2 py-0.5 text-black dark:text-white bg-slate-200 dark:bg-slate-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs text-black dark:text-white font-roboto flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
