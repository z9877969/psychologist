import { createContext, useEffect, useState } from 'react';
import { getBlogsListApi } from 'services/ownApi';

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

        setBlogs(result.blogs);
        setCategories(result.categories);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error.message);
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
