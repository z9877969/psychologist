import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryTitle } from '../PrimaryTitle/PrimaryTitle';
import { Quote } from '../Quote/Quote';
import s from './ContentList.module.scss';
import * as images from '../../img';
import articles from '../../data/articles.json';
import { Picture } from 'shared/components';

const ContentList = () => {
  let previousWasParagraph = false;

  const data = articles;
  return (
    <div>
      {data.map((item, index) => {
        let component;
        switch (item.block) {
          case 'primaryTitle':
            component = <PrimaryTitle key={index} content={item.content} />;
            previousWasParagraph = false;
            break;
          case 'paragraph':
            component = <Paragraph key={index} content={item.content} />;
            previousWasParagraph = true;
            break;
          case 'image':
            component = (
              <Picture
                className={s.wrapImage}
                urlMobile={images[item.content.urlMobile]}
                urlMobile2x={images[item.content.urlMobile2x]}
                urlTablet={images[item.content.urlTablet]}
                urlTablet2x={images[item.content.urlTablet2x]}
                urlDesktop={images[item.content.urlDesktop]}
                urlDesktop2x={images[item.content.urlDesktop2x]}
              />
            );
            previousWasParagraph = false;
            break;
          case 'quote':
            component = (
              <Quote
                key={index}
                content={item.content}
                accent={item.accent}
                author={item.author}
              />
            );
            previousWasParagraph = false;
            break;
          default:
            // eslint-disable-next-line no-console
            console.error('Unknown block type:', item.block);
            return null;
        }

        if (previousWasParagraph && item.block !== 'paragraph') {
          component = <div className={s.wrapParagraph}>{component}</div>;
        }

        return component;
      })}
    </div>
  );
};

export default ContentList;
