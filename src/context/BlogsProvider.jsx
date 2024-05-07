import { createContext, useEffect, useState } from 'react';
import { getBlogsListApi } from 'services/ownApi';
import { toastify } from 'shared/helpers';

export const BlogsContext = createContext(null);

const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBlogsData = async () => {
      try {
        setIsLoading(true);
        const result = await getBlogsListApi();

        setBlogs(result.blogs.filter((el) => el.items.length > 0));
        setCategories(result.categories);
      } catch (error) {
        toastify.error('Щось пішло не так :(\nСпробуйте пізніше ще раз.');
      } finally {
        setIsLoading(false);
      }
    };
    !blogs.length && getBlogsData();
  }, [blogs]);
  return (
    <BlogsContext.Provider value={{ isLoading, blogs, categories }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsProvider;
