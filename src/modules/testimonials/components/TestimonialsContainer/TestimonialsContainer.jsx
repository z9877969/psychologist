import { Container } from 'shared/components';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import s from './TestimonialsContainer.module.scss';
import SwiperContainer from 'shared/components/Swiper/components/SwiperContainer/SwiperContainer';
import { useEffect, useState } from 'react';
import fetchData from '../../data/fetchData';
import { ThreeDots } from 'react-loader-spinner';
import BackgroundImage from 'shared/components/BackgroundImeg/BackgroundImage';

function TestimonialsContainer() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async () => {
    try {
      //  setError(false);
      setLoading(true);
      const result = await fetchData();
      setTestimonials(result);
    } catch (error) {
      //  setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const data = testimonials.slice(0, 8);
  return (
    <section id="reviews" className={s.testimonials}>
      <Container>
        {loading ? (
          <div className={s.loderWrapper}>
            <ThreeDots />
          </div>
        ) : (
          <>
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
          </>
        )}
      </Container>
      <BackgroundImage
        classSvg={s.svg}
        classLine={s.svgL}
        name={'icon-vecto-reviews'}
        nameLine={'icon-vector-reviews-line'}
      />
    </section>
  );
}

export default TestimonialsContainer;
