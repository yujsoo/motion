import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="max-w-2xl mx-auto pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button
        className="px-2 py-2 text-white bg-black rounded-md"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        Let's go!
      </motion.button>
    </motion.div>
  );
}

export default Home;
