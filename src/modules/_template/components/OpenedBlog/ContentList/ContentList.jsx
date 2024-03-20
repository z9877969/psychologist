import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { PrimaryTitle } from '../PrimaryTitle/PrimaryTitle';
import { Quote } from '../Quote/Quote';

const ContentList = ({ articles }) => {
  return (
    <div>
      {articles.map((item, index) => {
        switch (item.block) {
          case 'primaryTitle':
            return <PrimaryTitle key={index} content={item.content} />;
          case 'paragraph':
            return <Paragraph key={index} content={item.content} />;
          case 'image':
            return <Image key={index} content={item.content} />;
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
            console.error('Unknown block type:', item.block);
            return null;
        }
      })}
    </div>
  );
};

export default ContentList;
