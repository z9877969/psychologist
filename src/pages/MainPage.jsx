import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { Blog } from 'modules/blogSection';

const MainPage = () => {
  return (
    <>
      <Blog />
      <ModuleTemplate />
      <Consultation />
    </>
  );
};

export default MainPage;
