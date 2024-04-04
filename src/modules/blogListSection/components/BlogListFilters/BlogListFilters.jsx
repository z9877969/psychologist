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

const BlogListFilters = ({ onChange, isLoading }) => {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
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

    onChange(searchParams.get('category') || '', query.trim());
  }

  function handleRemoveQuery() {
    setQuery('');

    onChange(searchParams.get('category') || '', '');
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
          isDisabled={isLoading}
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
          isDisabled={isLoading}
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Пошук"
          disabled={isLoading}
        />

        <button className={s.button} type="submit" disabled={isLoading}>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-search`}></use>
          </svg>
        </button>

        {query !== '' && (
          <button
            className={s.removeButton}
            type="button"
            onClick={handleRemoveQuery}
            disabled={isLoading}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        )}
      </form>
    </div>
  );
};

export default BlogListFilters;
