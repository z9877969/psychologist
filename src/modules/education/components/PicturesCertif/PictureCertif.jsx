import { Picture } from 'shared/components';

export default function PictureCertif({ images, item }) {
  return (
    <Picture
      urlDesktop={images[item.urlDesktop]}
      urlDesktop2x={images[item.urlDesktop2x]}
      urlTablet={images[item.urlTablet]}
      urlTablet2x={images[item.urlTablet2x]}
      urlMobile={images[item.urlMobile]}
      urlMobile2x={images[item.urlMobile2x]}
      alt={item.alt}
    />
  );
}
