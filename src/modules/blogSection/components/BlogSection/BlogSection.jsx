import { Container } from 'shared/components';
import s from './BlogSection.module.scss';
import blogData from '../../data/blogData.json';
import Button from 'shared/components/Button/Button';
import BlogTitle from 'shared/components/BlogTitle/BlogTitle';
import * as images from '../../img';
import BlogList from 'shared/components/BlogList/BlogList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

const BlogSection = () => {
  const { blogId } = useParams();
  const [isBlogPage] = useState(blogId ? true : false);

  const data = blogData.slice(0, 3);

  return (
    <section className={s.section}>
      <Container>
        <div className={clsx(isBlogPage ? s.blogPageWrapper : s.titleWrapper)}>
          {isBlogPage ? (
            <h2 className={s.blogPageTitle}>Останні статті</h2>
          ) : (
            <BlogTitle className={s.title} />
          )}
        </div>
        <BlogList
          data={data}
          images={images}
          className={clsx(isBlogPage ? s.blogList : s.list)}
          classItem={clsx(isBlogPage ? s.blogItem : s.item)}
        />
        <Button to="/blog">Переглянути більше статтей</Button>
      </Container>
    </section>
  );
};
export default BlogSection;
