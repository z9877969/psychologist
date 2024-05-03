import { createContext, useEffect, useState } from 'react';
import { getMainPageContentApi } from 'services/ownApi';
import { Loader } from 'shared/components';

export const MainPageContext = createContext(null);

const BlogsProvider = ({ children }) => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPageData = async () => {
      try {
        setIsLoading(true);
        const result = await getMainPageContentApi();

        setPage(result);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    !page && getPageData();
  }, [page]);
  return (
    <MainPageContext.Provider value={page}>
      {page && children}
      {isLoading && <Loader />}
    </MainPageContext.Provider>
  );
};

export default BlogsProvider;
