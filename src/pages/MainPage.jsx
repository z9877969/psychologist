import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';
import Hero from 'modules/hero/components/Hero/Hero';

const MainPage = () => {
  return (
    <>
      <Hero />
      <BlogSection />
      {/* <ModuleTemplate /> */}
      <Consultation />
      <BookConsultation />
      <BlogSection />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
