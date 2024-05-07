export const filterBlogs = ({
  page = 1,
  limit = 9,
  category = '',
  query = '',
  articles,
}) => {
  let list = [];
  if (!category && !query) {
    list = articles;
  } else {
    list = articles.filter((el) => {
      const titleItem = el.items.find((item) => item.block === 'primaryTitle');
      if (query && category) {
        return (
          el.category._id === category &&
          titleItem.content.toLowerCase().includes(query.toLowerCase())
        );
      }
      if (query) {
        return titleItem.content.toLowerCase().includes(query.toLowerCase());
      }
      if (category) {
        return el.category._id === category;
      }
      return false;
    });
  }

  list = list.map((blog) => {
    const author = blog.author;
    const title = blog.items.find((item) => item.block === 'primaryTitle');
    return {
      ...blog,
      date: author.date,
      alt: 'Зображення до статті ' + title?.content,
    };
  });

  if (list.length === 0) return { data: [], total: 0, totalPages: 0 };

  const total = list.length;
  const totalPages = Math.ceil(total / limit);

  const data = list
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice((page - 1) * limit, Math.min(total, page * limit));

  return { data, total, totalPages };
};
