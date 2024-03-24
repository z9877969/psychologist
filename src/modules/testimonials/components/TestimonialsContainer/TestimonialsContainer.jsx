import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Section } from 'shared/components';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import PaginationDots from '../PaginationDots/PaginationDots';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import testimonials from '../../data/';
import s from './TestimonialsContainer.module.scss';
import { sprite } from 'shared/icons';

function TestimonialsContainer() {
  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const itemsPerPage = isMobile ? 1 : 2;
  const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1;
  const paginationDots = isMobile ? 8 : 4;

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
            sprite={sprite}
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
        <ButtonGroup testimonials={testimonials} />
      </Section>
    </Container>
  );
}

export default TestimonialsContainer;
