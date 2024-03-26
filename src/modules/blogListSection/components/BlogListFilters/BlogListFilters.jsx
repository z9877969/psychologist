import { useEffect, useState } from 'react';
import { blogAPI } from 'shared/helpers/blogAPI';
import { sprite } from '../../../../shared/icons/index';
import Select, { components } from 'react-select';
import s from './BlogListFilters.module.scss';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-chevron-down`} />
      </svg>
    </components.DropdownIndicator>
  );
};

const BlogListFilters = ({ onSelect, onSearch, onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const result = await blogAPI.fetchCategories();
        setCategories(result);
      } catch (err) {
        alert(err);
      }
    }

    getCategories();
  }, []);

  function handleSelect(e) {
    onSelect(e.value);
    onChange(1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(e.target.elements.query.value.trim());
    onChange(1);
  }

  const options =
    categories.length === 0
      ? []
      : categories.map((c) => {
          return {
            value: c.name,
            label: c.title,
          };
        });

  return (
    <div className={s.container}>
      <Select
        defaultValue={null}
        onChange={handleSelect}
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Оберіть тему"
        className="theme-select-container"
        classNamePrefix="theme-select"
        // menuIsOpen={true}
      />

      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          placeholder="Пошук"
        />
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
