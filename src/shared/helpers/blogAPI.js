import articles from '../data/blogData.json';
import categories from '../data/blogCategories.json';

export const blogAPI = {
  fetchCategories: async function () {
    return categories;
  },

  fetchLatestArticles: async function (limit = 9) {
    return articles
      .toSorted((a, b) => b.date.localeCompare(a.date))
      .slice(0, limit);
  },

  fetchArticles: async function ({
    page = 1,
    limit = 9,
    category = '',
    query = '',
  }) {
    const filteredArray = articles.filter((art) => {
      let result =
        category === ''
          ? true
          : art.category.toLowerCase() === category.toLowerCase();

      if (result && query !== '') {
        result = art.title.toLowerCase().includes(query.toLocaleLowerCase());
      }

      return result;
    });

    if (filteredArray.length === 0)
      return { data: [], total: 0, totalPages: 0 };

    const total = filteredArray.length;
    const totalPages = Math.ceil(total / limit);

    const data = filteredArray
      .toSorted((a, b) => b.date.localeCompare(a.date))
      .slice((page - 1) * limit, Math.min(total, page * limit));

    // imitation delay of backend.  max value = 3000 ms
    const timer = Math.floor(Math.random() * 1000 * 3);
    // const timer = 10000;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data, total, totalPages });
      }, timer);
    });
  },
};
