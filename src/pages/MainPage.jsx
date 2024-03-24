import About from 'modules/aboutSection/components/About/About';
import VideoSection from 'modules/videoSection/components/VideoSection/VideoSection';
import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';
import { Testimonials } from 'modules/testimonials';

const MainPage = () => {
  return (
    <>
      <VideoSection />
      <About />
      <Consultation />
      <Testimonials />
      <BookConsultation />
      <BlogSection />
      <FrequentlyAskedQuestions />

    </>
  );
};

export default MainPage;
