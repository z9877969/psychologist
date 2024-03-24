const Picture = ({ mob, mob2x, tab, tab2x, desc, desc2x, ...props }) => {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={`${desc} 1x, ${desc2x} 2x`} />
      <source media="(min-width: 768px)" srcSet={`${tab} 1x, ${tab2x} 2x`} />
      <img
        srcSet={`${mob} 1x, ${mob2x} 2x`}
        src={mob}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default Picture;
