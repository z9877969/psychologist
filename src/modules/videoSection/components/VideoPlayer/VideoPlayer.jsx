import ReactPlayer from 'react-player';
import imagePreview from '../../img/presentation.jpg';
import s from './VideoPlayer.module.scss';

export default function VideoPlayer() {
  return (
    <div className={s.playerWrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        light={imagePreview}
        playing={false}
        loop={false}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}
