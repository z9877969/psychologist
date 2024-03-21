import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { BlogSection } from 'modules/blogSection';

const MainPage = () => {
  return (
    <>
      <BlogSection />
      <ModuleTemplate />
      <Consultation />
      <BookConsultation />
    </>
  );
};

export default MainPage;
