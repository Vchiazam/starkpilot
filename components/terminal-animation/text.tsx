import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";

const wordSets = [
  ["Contribute", "Track", "Get Noticed"],
  ["Build", "Connect", "Grow"],
  ["Showcase", "Collaborate", "Earn"],
  ["Lead", "Innovate", "Inspire"],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const wordVariant = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function HeroSection() {
  const [setIndex, setSetIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSetIndex((prev) => (prev + 1) % wordSets.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Badge */}
      <motion.div
        variants={containerVariants}
        className="inline-flex items-center animate-pulse px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-4 h-4 mr-2 text-yellow-400 animate-spin" />
        </motion.div>
        The future of open-source on StarkNet
      </motion.div>

      <motion.h1 className="text-6xl lg:text-7xl font-bold leading-tight flex flex-wrap gap-x-4 min-h-[90px]">
        <AnimatePresence mode="wait">
          {wordSets[setIndex].map((word) => (
            <motion.span
              key={word}
              variants={wordVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-gradient-to-r break-words from-purple-200 via-white to-cyan-200 bg-clip-text text-transparent inline-block"
            >
              {word}.
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={containerVariants}
        className="text-xl text-gray-300 max-w-lg relative group"
      >
        <span className="absolute -left-4 top-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        The ultimate contribution tracker and community dashboard for StarkNet
        developers. Connect, contribute, and showcase your impact in the
        ecosystem.
      </motion.p>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              transition: {
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
