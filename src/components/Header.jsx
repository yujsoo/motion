import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 10,
      }}
      className="fixed top-0 left-0 flex w-full h-[60px] px-10 mt-2 border-b items-center justify-center"
    >
      <h1>Welcome to Motion!</h1>
    </motion.header>
  );
}

export default Header;
