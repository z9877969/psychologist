import { Consultation } from 'modules/Consultation';
import { ModuleTemplate } from 'modules/_template';
import { Blog } from 'modules/blogSection';
import FrequentlyAskedQuestions from 'modules/frequentlyAskedQuestions/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

const MainPage = () => {
  return (
    <>
      <Blog />
      <ModuleTemplate />
      <Consultation />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default MainPage;
