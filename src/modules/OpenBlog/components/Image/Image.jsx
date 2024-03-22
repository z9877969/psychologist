import Picture from 'shared/components/Picture/Picture';
import s from './Image.module.scss';

export const Image = ({
  content: {
    urlMobile,
    urlMobile2x,
    urlTablet,
    urlTablet2x,
    urlDesktop,
    urlDesktop2x,
    alt,
    height,
  },
}) => {
  let imgWidth = '311';
  if (document.body.clientWidth > 767)
    imgWidth = document.body.clientWidth > 1439 ? '336' : '300';

  return (
    <div className={s.wrapImage}>
      <div className={s.pictureWrapper}>
        <Picture
          urlDesktop={urlDesktop}
          urlDesktop2x={urlDesktop2x}
          urlTablet={urlTablet}
          urlTablet2x={urlTablet2x}
          urlMobile={urlMobile}
          urlMobile2x={urlMobile2x}
          alt={alt}
          width={imgWidth}
          height={height}
        />
      </div>
      {/* <img className={s.img} src={content} alt="Image" /> */}
    </div>
  );
};
