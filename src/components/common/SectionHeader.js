import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  );
};
