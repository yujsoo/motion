import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 120,
    },
  },
};

// variants를 이용한 부모-자식 간 애니메이션 전파
// - 부모에 initial, animate 설정하면 자식은 생략 가능
// - 자식은 variants만 선언해도 작동함
// - 애니메이션 상태(initial, animate)는 부모에서 전파됨
// → 코드 반복 없이 깔끔하게 작성 가능!

function Home() {
  return (
    <motion.div
      className="max-w-2xl mx-auto pt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
