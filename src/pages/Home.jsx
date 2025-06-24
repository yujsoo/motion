import { motion } from "framer-motion";
import riizeBg from "../assets/riize.webp";
import { useState } from "react";

const trackList = [
  { num: 1, name: "Odyssey", isTitle: false },
  { num: 2, name: "Bag Bad Back", isTitle: false },
  { num: 3, name: "잉걸(Ember to Solar)", isTitle: false },
  { num: 4, name: "Fly Up", isTitle: true },
  { num: 5, name: "Show Me Love", isTitle: false },
  { num: 6, name: "Passage", isTitle: false },
  { num: 7, name: "Midnight Mirage", isTitle: false },
  { num: 8, name: "모든 하루의 끝(The End of the Day)", isTitle: false },
  { num: 9, name: "Inside My Love", isTitle: false },
  { num: 10, name: "Another Life", isTitle: false },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 130,
      // mass: 0.4,
      // damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

function Home() {
  const [trackView, setTrackView] = useState(false);

  const handleTrackView = () => {
    setTrackView(true);
  };

  return (
    <motion.div
      className="p-10 pt-36 overflow-hidden text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="w-60 h-60 mx-auto rounded-full overflow-hidden">
        <img src={riizeBg} alt="" />
      </motion.div>
      <motion.button
        variants={textVariants}
        className="mt-8 font-medium py-1 px-2 text-[#ff9200] border border-[#ff9200] hover:bg-[#ff9200] hover:text-white transition-colors duration-300 rounded-md"
        onClick={handleTrackView}
      >
        ODYSSEY - The 1st Album 트랙 리스트 보기
      </motion.button>
      {trackView && (
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-2"
        >
          {trackList.map((item, i) => (
            <motion.li key={i} variants={textVariants} className="py-2">
              <span className="mr-2">{item.num}.</span>
              {item.isTitle && (
                <span className="py-1 px-2 mr-2 text-xs text-[#ff9200] border border-[#ff9200] rounded-xl">
                  TITLE
                </span>
              )}
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default Home;
