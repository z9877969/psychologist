import { useState } from 'react';
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

const BlogListFilters = ({ onChange, isLoading, categories }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const initialCategory = useRef(searchParams.get('category'));

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
      : [
          ...categories.map((c) => {
            return {
              value: c._id,
              label: c.title,
            };
          }),
          {
            value: null,
            label: 'Всі теми',
          },
        ];

  const defaultValue =
    initialCategory.current === null ? null : options[options.length - 1];

  return (
    <div className={s.container}>
      {(categories.length === 0 || initialCategory.current === null) && (
        <Select
          onChange={handleSelect}
          isDisabled={isLoading}
          options={options}
          components={{ DropdownIndicator }}
          placeholder="Оберіть тему"
          className="theme-select-container"
          classNamePrefix="theme-select"
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
