import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all z-50 group"
          whileHover={{ scale: 1.15, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;
