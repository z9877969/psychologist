import { useEffect } from 'react';
import About from 'modules/aboutSection/components/About/About';
import VideoSection from 'modules/videoSection/components/VideoSection/VideoSection';
import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import Education from 'modules/education/components/EducationSection/EducationSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';
import { Testimonials } from 'modules/testimonials';
import { Hero } from 'modules/hero';
import { scrollOnOpenPage } from 'shared/helpers/scroll';
import { HowCanIHelpMain } from 'modules/howCanIHelp';
import { Quote } from 'modules/quotes/components/Quote';
import quotes1 from '../modules/quotes/data/quotes1.json';
import quotes2 from '../modules/quotes/data/quotes2.json';
import { useMainPage } from 'hooks/useMainPage';

const MainPage = () => {
  const page = useMainPage();
  const { myHelpSection, sertificateSection, videoSection } = page || {};
  useEffect(() => {
    scrollOnOpenPage();
  }, []);

  return (
    <>
      <Hero />
      <VideoSection {...videoSection} />
      <About />
      <Education {...sertificateSection} />
      <Quote data={quotes1} />
      <HowCanIHelpMain {...myHelpSection} />
      <Consultation />
      <BookConsultation />
      <Testimonials />
      <Quote data={quotes2} />
      <BlogSection />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
