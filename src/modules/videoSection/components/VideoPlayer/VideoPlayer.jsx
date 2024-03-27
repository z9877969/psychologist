import ReactPlayer from 'react-player';
// import imagePreview from '../../img/presentation.jpg';
import s from './VideoPlayer.module.scss';
import { Picture } from 'shared/components';
import * as images from '../../img';
import videoData from '../data/videoData.json';

export default function VideoPlayer() {
  return (
    <div className={s.playerWrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        light={
          <Picture
            urlDesktop={images[videoData.urlDesktop]}
            urlDesktop2x={images[videoData.urlDesktop2x]}
            urlTablet={images[videoData.urlTablet]}
            urlTablet2x={images[videoData.urlTablet2x]}
            urlMobile={images[videoData.urlMobile]}
            urlMobile2x={images[videoData.urlMobile2x]}
          />
        }
        playing={false}
        loop={false}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}
