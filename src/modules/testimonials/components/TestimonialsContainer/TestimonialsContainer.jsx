// import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Container, Section } from 'shared/components';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
// import NavigationButtons from '../NavigationButtons/NavigationButtons';
// import PaginationDots from '../PaginationDots/PaginationDots';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import testimonials from '../../data/';
import s from './TestimonialsContainer.module.scss';
// import { sprite } from 'shared/icons';
import SwiperContainer from 'shared/components/Swiper/components/SwiperContainer/SwiperContainer';

function TestimonialsContainer() {
  // const [currentPage, setCurrentPage] = useState(0);

  // const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  // const itemsPerPage = isMobile ? 1 : 2;
  // const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1;
  // const paginationDots = isMobile ? 8 : 4;

  // const testimonialsToShow = testimonials.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 1) * itemsPerPage
  // );

  // const changePage = (newPage) => {
  //   const effectiveMaxPage = Math.min(maxPage, paginationDots - 1);
  //   if (newPage >= 0 && newPage <= effectiveMaxPage) {
  //     setCurrentPage(newPage);
  //   }
  // };
  // ============================
  const data = testimonials.slice(0, 8);
  return (
    <Section className={s.testimonials}>
      <Container>
        <h2 className={s.title}>Відгуки моїх клієнтів</h2>
        <SwiperContainer
          data={data}
          component={TestimonialCard}
          containerClass={s.swiperContainer}
          buttonsClass={s.buttonContainer}
          paginationClass={s.pagination}
          isPagination={true}
        />
        <ButtonGroup testimonials={testimonials} />
      </Container>
    </Section>
  );
}

export default TestimonialsContainer;
