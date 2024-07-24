"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    // Set the pathname after the component mounts, ensuring it runs client-side
    setPathname(window.location.pathname);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname} // Use state variable instead of directly accessing location.pathname
        className='main'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}