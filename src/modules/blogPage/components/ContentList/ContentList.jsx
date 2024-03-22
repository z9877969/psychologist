import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryTitle } from '../PrimaryTitle/PrimaryTitle';
import { Quote } from '../Quote/Quote';
import s from './ContentList.module.scss';

const ContentList = ({ articles }) => {
  let previousWasParagraph = false;

  return (
    <div>
      {articles.map((item, index) => {
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
            component = <Image key={index} content={item.content} />;
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
