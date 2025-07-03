import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView.js'; 


function Title({ children, id }) {
   const [ref, inView] = useInView(0.2);
 
   return (
     <motion.h1
       ref={ref}
       id={id && id}
       className='font-rubik text-4xl font-bold underline-offset-8 decoration-4 mt-20 mb-5 text-stone-900 dark:text-stone-300 items-center text-center'
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
       transition={{ duration: 0.6, ease: 'easeOut' }}
     >
       {children}
     </motion.h1>
   );
 }
 
 export default Title;
 