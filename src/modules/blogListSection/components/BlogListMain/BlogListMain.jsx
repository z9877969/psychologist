import { Container } from 'shared/components';
import s from './BlogListMain.module.scss';

const BlogListMain = ({ children }) => {
  return (
    <section className={s.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default BlogListMain;
