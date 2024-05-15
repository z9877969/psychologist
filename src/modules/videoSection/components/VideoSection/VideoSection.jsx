import BackgroundImage from '../BackgroundImage/BackgroundImage';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import s from './VideoSection.module.scss';
import { Container } from 'shared/components';

export default function VideoSection({ videoUrl, title }) {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>{title}</h2>
        <VideoPlayer videoUrl={videoUrl} />
        <BackgroundImage />
      </Container>
    </section>
  );
}
