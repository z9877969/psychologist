import { Picture } from 'shared/components';
import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryTitle } from '../PrimaryTitle/PrimaryTitle';
import { Quote } from '../Quote/Quote';

import s from './ContentList.module.scss'; // Підключення файлу стилів
import * as images from '../../img';

const ContentList = ({ article }) => {
  return (
    <div>
      {article.contents.map((item, index) => {
        switch (item.block) {
          case 'primaryTitle':
            return <PrimaryTitle key={index} content={item.content} />;
          case 'paragraph':
            // Додавання стилів до всіх параграфів, крім останнього
            return (
              <div
                key={index}
                className={
                  index !== article.contents.length - 1
                    ? s.paragraphWrapper
                    : ''
                }
              >
                <Paragraph content={item.content} />
              </div>
            );
          case 'image':
            return (
              <Picture
                key={index}
                className={s.wrapImage}
                urlMobile={images[item.content.urlMobile]}
                urlMobile2x={images[item.content.urlMobile2x]}
                urlTablet={images[item.content.urlTablet]}
                urlTablet2x={images[item.content.urlTablet2x]}
                urlDesktop={images[item.content.urlDesktop]}
                urlDesktop2x={images[item.content.urlDesktop2x]}
              />
            );
          case 'quote':
            return (
              <Quote
                key={index}
                content={item.content}
                accent={item.accent}
                author={item.author}
              />
            );
          default:
            // eslint-disable-next-line no-console
            console.error('Unknown block type:', item.block);
            return null;
        }
      })}
    </div>
  );
};

export default ContentList;
