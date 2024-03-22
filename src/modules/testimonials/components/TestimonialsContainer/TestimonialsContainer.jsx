import { useState, useEffect } from 'react';
import { Container, Section } from '../../../../shared/components';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import PaginationDots from '../PaginationDots/PaginationDots';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import testimonials from '../../data/index';
import s from './TestimonialsContainer.module.scss';

function TestimonialsContainer() {
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const itemsPerPage = windowWidth <= 767.98 ? 1 : 2;
  const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1;
  const paginationDots = windowWidth <= 767.98 ? 8 : 4;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonialsToShow = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const changePage = (newPage) => {
    const effectiveMaxPage = Math.min(maxPage, paginationDots - 1);
    if (newPage >= 0 && newPage <= effectiveMaxPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Container>
      <Section className={s.testimonials}>
        <div className={s.navigationTop}>
          <h2 className={s.title}>Відгуки моїх клієнтів</h2>
          <NavigationButtons
            currentPage={currentPage}
            maxPage={maxPage}
            paginationDots={paginationDots}
            changePage={changePage}
          />
        </div>
        <div className={s.cardsContainer}>
          {testimonialsToShow.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <PaginationDots
          currentPage={currentPage}
          paginationDots={paginationDots}
          changePage={changePage}
        />
        <ButtonGroup />
      </Section>
    </Container>
  );
}

export default TestimonialsContainer;
