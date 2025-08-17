export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

export const staggerChildren = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
