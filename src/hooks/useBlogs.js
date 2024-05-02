import { BlogsContext } from 'context/BlogsProvider';
import { useContext } from 'react';

export const useBlogs = () => useContext(BlogsContext);
