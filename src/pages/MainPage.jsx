import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';

const MainPage = () => {
  return (
    <>
      <Consultation />
      <BookConsultation />
      <BlogSection />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
