import React from 'react';
import { motion } from 'framer-motion';
const Log = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      로그페이지
    </motion.div>
  );
};

export default Log;
