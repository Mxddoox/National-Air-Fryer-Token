// pages/index.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <motion.div
        className="fixed w-full h-full"
        animate={{
          background: [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            'linear-gradient(135deg, #4ecdc4, #45b7d1)',
            'linear-gradient(225deg, #45b7d1, #ff6b6b)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{ opacity: 0.1 }}
      />

      {/* Main Content */}
      <main
        ref={ref}
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center"
      >
        {/* Airfryer Visual */}
        <motion.div
          className="mb-12"
          whileHover={{ scale: 1.05 }}
          style={{ rotate }}
        >
          <svg
            className="w-48 h-48 text-yellow-400"
            viewBox="0 0 100 100"
          >
            {/* Airfryer SVG Paths */}
            <path
              d="M20 20 L80 20 L90 40 L10 40 Z"
              fill="currentColor"
              stroke="#fff"
              strokeWidth="2"
            />
            <motion.path
              d="M30 45 L70 45"
              stroke="#fff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          </svg>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          className="text-6xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Airfryer
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 max-w-2xl text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The national digital asset tracking air fryer adoption and culinary innovation
        </motion.p>

        {/* Data Visualization */}
        <motion.div
          className="mt-12 w-full max-w-4xl h-48 bg-gray-800 rounded-lg backdrop-blur-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Add your data visualization component here */}
        </motion.div>
      </main>
    </div>
  );
}
