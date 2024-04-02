import BackgroundImage from '../BackgroundImage/BackgroundImage';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import s from './VideoSection.module.scss';
import { Container } from 'shared/components';

export default function VideoSection() {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Відео презентація</h2>
        <VideoPlayer />
        <BackgroundImage />
      </Container>
    </section>
  );
}
