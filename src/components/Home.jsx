import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="max-w-2xl mx-auto pt-10"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
    >
      <motion.button className="px-2 py-2 text-white bg-black rounded-md">
        Let's go!
      </motion.button>
      <motion.button
        className="px-2 py-2 text-white bg-slate-500 rounded-md"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(0,0,0,.5)",
          boxShadow: "0px 0px 8px rgba(0,0,0,.5)",
        }}
      >
        hover button!
      </motion.button>
    </motion.div>
  );
}

export default Home;
