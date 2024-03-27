import About from 'modules/aboutSection/components/About/About';
import VideoSection from 'modules/videoSection/components/VideoSection/VideoSection';
import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import Education from 'modules/education/components/EducationSection/EducationSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';
import { Testimonials } from 'modules/testimonials';
import { Hero } from 'modules/hero';
import { useEffect } from 'react';
import { scrollOnOpenPage } from 'shared/helpers/scroll';

const MainPage = () => {
  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  return (
    <>
      <Hero />
      <VideoSection />
      <About />
      <Education />
      <Consultation />
      <Testimonials />
      <BookConsultation />
      <BlogSection />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
