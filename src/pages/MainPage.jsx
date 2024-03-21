import { BookConsultation } from 'modules/BookConsultation';
import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { Blog } from 'modules/blogSection';

const MainPage = () => {
  return (
    <>
      <Blog />
      <ModuleTemplate />
      <Consultation />
      <BookConsultation />
    </>
  );
};

export default MainPage;
