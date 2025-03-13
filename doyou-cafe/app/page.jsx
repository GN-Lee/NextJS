import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      style={{
        height: "300vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 2 }}
      >
        태초마을이야!
      </motion.p>
    </div>
  );
}
