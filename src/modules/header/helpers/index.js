const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight + 1;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
};
export default scrollToSection;
