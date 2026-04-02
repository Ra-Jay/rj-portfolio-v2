import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 px-6 py-4 rounded-full bg-white text-black font-bold shadow-2xl hover:bg-cyan-400 transition-colors group"
          >
            <PhoneCall size={20} className="group-hover:animate-bounce" />
            <span className="hidden md:inline">Book a Call</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
