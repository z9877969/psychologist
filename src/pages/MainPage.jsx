import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { BlogSection } from 'modules/blogSection';
import Education from 'modules/education/components/EducationSection/EducationSection';
import { FrequentlyAskedQuestions } from 'modules/frequentlyAskedQuestions';

const MainPage = () => {
  return (
    <>
      <Education />
      <BlogSection />
      <Consultation />
      <BookConsultation />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
