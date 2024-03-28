const Section = ({ className, children, id = '' }) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;
