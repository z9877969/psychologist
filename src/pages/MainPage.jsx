import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { Blog } from 'modules/blogSection';
import { Testimonials } from 'modules/testimonials';

const MainPage = () => {
  return (
    <>
      <Blog />
      <ModuleTemplate />
      <Consultation />
      <Testimonials />
    </>
  );
};

export default MainPage;
