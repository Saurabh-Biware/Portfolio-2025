import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div 
      className="w-full py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default SectionDivider;
