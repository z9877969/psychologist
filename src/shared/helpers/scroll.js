export const scrollOnOpenPage = (behavior = 'instant') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};
