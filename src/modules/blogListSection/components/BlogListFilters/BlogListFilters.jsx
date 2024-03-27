import { useEffect, useState } from 'react';
import { blogAPI } from 'shared/helpers/blogAPI';
import { sprite } from '../../../../shared/icons/index';
import Select, { components } from 'react-select';
import s from './BlogListFilters.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-chevron-down`} />
      </svg>
    </components.DropdownIndicator>
  );
};

const BlogListFilters = ({ onChange }) => {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const initialCategory = useRef(searchParams.get('category'));

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
    onChange(e.value, searchParams.get('query') || '');
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChange(
      searchParams.get('category') || '',
      e.target.elements.query.value.trim()
    );
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

  const defaultValue =
    initialCategory.current === null
      ? null
      : {
          value: initialCategory.current,
          label:
            categories.find((c) => c.name === initialCategory.current)?.title ??
            '',
        };

  return (
    <div className={s.container}>
      {(categories.length === 0 || initialCategory.current === null) && (
        <Select
          defaultValue={defaultValue}
          onChange={handleSelect}
          options={options}
          components={{ DropdownIndicator }}
          placeholder="Оберіть тему"
          className="theme-select-container"
          classNamePrefix="theme-select"
          // menuIsOpen={true}
        />
      )}
      {categories.length > 0 && initialCategory.current !== null && (
        <Select
          defaultValue={defaultValue}
          onChange={handleSelect}
          options={options}
          components={{ DropdownIndicator }}
          placeholder="Оберіть тему"
          className="theme-select-container"
          classNamePrefix="theme-select"
          // menuIsOpen={true}
        />
      )}

      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          defaultValue={searchParams.get('query') ?? ''}
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
