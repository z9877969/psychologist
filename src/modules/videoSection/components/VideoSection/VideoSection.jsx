import VideoPlayer from 'modules/videoSection/utils/react-player';
import s from './VideoSection.module.scss';
import { Container } from 'shared/components';

export default function VideoSection() {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Відео презентація</h2>
        <VideoPlayer />
      </Container>
    </section>
  );
}
