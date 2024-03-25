import Container from 'shared/components/Container/Container';
import Section from 'shared/components/Section/Section';
import * as images from '../../img';
import certifData from '../../data/certificates.json';
import SliderCertif from '../SliderCertif/SliderCertif';
import { useRef } from 'react';
import SliderBar from '../SliderBar/SliderBar';

const EducationSection = () => {
  const swiperRef = useRef(null);
  return (
    <Section>
      <Container>
        <SliderBar swiperRef={swiperRef} />
        <SliderCertif
          dataCertif={certifData}
          images={images}
          swiperRef={swiperRef}
        />
      </Container>
    </Section>
  );
};

export default EducationSection;

// function Fu() {
//   const swiperRef = useRef(null);

//   return (
//     <>
//       <SliderBar swiperRef={swiperRef} />
//       <SliderSwiper
//         dataJson={dataJson}
//         component={(props) => <SomeComponent {...props} />}
//         swiperRef={swiperRef}
//       />
//     </>
//   );
// }
