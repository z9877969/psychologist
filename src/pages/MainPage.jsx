import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { BlogSection } from 'modules/blogSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';
import Hero from 'modules/hero/components/Hero/Hero';

const MainPage = () => {
  return (
    <>
      <Hero />
      <BlogSection />
      <ModuleTemplate />
      <Consultation />
      <BookConsultation />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
