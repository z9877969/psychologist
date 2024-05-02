import { createContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getMainPageContentApi } from 'services/ownApi';

const loaderRoot = document.querySelector('#loader-root');

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
      {isLoading &&
        createPortal(
          <div
            style={{
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              left: 0,
              top: 0,
              backgroundColor: '#ffffff',
              zIndex: 150,
            }}
          ></div>,
          loaderRoot
        )}
    </MainPageContext.Provider>
  );
};

export default BlogsProvider;
