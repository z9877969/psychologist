import s from './About.module.scss';
import { Container, Picture, SectionDescription } from 'shared/components';

import * as images from '../../img';
import aboutData from '../../data/aboutData.json';
import { pasteAccentPhrase } from 'shared/helpers';

export default function About({ accent, descr, title }) {
  const renderedTitle = pasteAccentPhrase(title, accent).map(
    ({ type, value }, i) =>
      type === 'accent' ? (
        <span key={i} className={s.accent}>
          {value.split('\n').map((el, i, arr) => (
            <>
              {el}
              {i < arr.length - 1 && <br />}
            </>
          ))}
        </span>
      ) : (
        value.split('\n').map((el, i, arr) => (
          <>
            {el}
            {i < arr.length - 1 && <br />}
          </>
        ))
      )
  );

  return (
    <section id="about" className={s.section}>
      <Container className={s.container}>
        <div className={s.aboutWrapper}>
          <div className={s.textWrapper}>
            <h2 className={s.title}>{renderedTitle}</h2>
            <SectionDescription descr={descr} />
          </div>

          <div className={s.pictureWrapper}>
            <Picture
              urlDesktop={images[aboutData.urlDesktop]}
              urlDesktop2x={images[aboutData.urlDesktop2x]}
              urlTablet={images[aboutData.urlTablet]}
              urlTablet2x={images[aboutData.urlTablet2x]}
              urlMobile={images[aboutData.urlMobile]}
              urlMobile2x={images[aboutData.urlMobile2x]}
              alt={aboutData.alt}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
