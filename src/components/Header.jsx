import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -200 }} // 시작점
      animate={{ y: -10 }} // 끝점
      className="border-b"
    >
      <h1>Welcome to Motion</h1>
    </motion.header>
  );
}

export default Header;
