import { useEffect, useState } from 'react';
import s from './BlogListFilters.module.scss';
import { blogAPI } from 'shared/helpers/blogAPI';
import { sprite } from '../../../../shared/icons/index';

const BlogListFilters = ({ category = '', onSelect, onSearch }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const result = await blogAPI.fetchCategories();
        setCategories([{ id: 0, name: 'Оберіть тему' }, ...result]);
      } catch (err) {
        alert(err);
      }
    }

    getCategories();
  }, []);

  function handleSelect(e) {
    onSelect(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(e.target.elements.query.value.trim());
  }

  return (
    <div className={s.container}>
      <select
        className={s.input}
        name="category"
        onChange={handleSelect}
        value={category}
      >
        {/* <option value="" key={0}></option>
        <option value="Психологія особистості">Психологія особистості</option>
        <option value="Психологія організацій">Психологія організацій</option>
        <option value="Психодіагностика">Психодіагностика</option>
        <option value="Дитячо-батьківські стосунки">
          Дитячо-батьківські стосунки
        </option>
        <option value="Психологія сімейних стосунків">
          Психологія сімейних стосунків
        </option> */}
        {categories.length &&
          categories.map((cat) => {
            return (
              <option key={cat.id} value={cat.id === 0 ? '' : cat.name}>
                {cat.name}
              </option>
            );
          })}
      </select>
      <form className={s.form} onSubmit={handleSubmit}>
        <input className={s.input} type="text" name="query" />
        <button className={s.button} type="submit">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-search`}></use>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default BlogListFilters;
