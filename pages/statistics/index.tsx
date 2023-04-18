import { motion } from 'framer-motion';
import React from 'react';

const Statistics = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>통계페이지</div>
    </motion.div>
  );
};

export default Statistics;
