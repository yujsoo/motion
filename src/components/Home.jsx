import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.h1
        animate={{
          fontSize: 60,
          color: "#fae300",
          x: 50,
          y: 100,
        }}
      >
        Welcome to Motion
      </motion.h1>
      <motion.button
        animate={{
          scale: 1.5,
        }}
      >
        Let's go!
      </motion.button>
    </>
  );
}

export default Home;
