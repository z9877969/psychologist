import { Picture } from 'shared/components';
import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryTitle } from '../PrimaryTitle/PrimaryTitle';
import { Quote } from '../Quote/Quote';

import s from './ContentList.module.scss'; // Підключення файлу стилів

const ContentList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        switch (item.block) {
          case 'primaryTitle':
            return <PrimaryTitle key={index} content={item.content} />;
          case 'paragraph':
            // Додавання стилів до всіх параграфів, крім останнього
            return (
              <div
                key={index}
                className={index !== items.length - 1 ? s.paragraphWrapper : ''}
              >
                <Paragraph content={item.content} />
              </div>
            );
          case 'image':
            return (
              <Picture
                key={index}
                className={s.wrapImage}
                defaultImage={item.content}
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
            return null;
        }
      })}
    </div>
  );
};

export default ContentList;
