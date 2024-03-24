import { ModuleTemplate } from 'modules/_template';
import About from 'modules/aboutSection/components/About/About';
import { Blog } from 'modules/blogSection';
import VideoSection from 'modules/videoSection/components/VideoSection/VideoSection';

const MainPage = () => {
  return (
    <>
      <VideoSection />
      <About />
      <Blog />

      <ModuleTemplate />
    </>
  );
};

export default MainPage;
