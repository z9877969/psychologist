export const LastArticleCard = ({ image, date, author, title, content }) => {
  return (
    <div>
      <div>
        <img src={image} alt="Image" width={336} />
      </div>
      <div>
        <p>{date}</p>
        <p>{author}</p>
      </div>
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};
