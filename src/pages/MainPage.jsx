import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { BlogSection } from 'modules/blogSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';

const MainPage = () => {
  return (
    <>
      <BlogSection />
      <ModuleTemplate />
      <Consultation />
      <BookConsultation />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
