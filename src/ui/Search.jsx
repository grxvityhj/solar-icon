import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import { useState } from 'react';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : ''
  );

  function handleQuery(e) {
    setQuery(e.target.value);

    searchParams.set('search', e.target.value.trim());
    setSearchParams(searchParams);
  }

  function handleReset() {
    setQuery('');

    searchParams.set('search', '');
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        placeholder="search"
        onChange={handleQuery}
      />

      {query && (
        <button className={styles.reset} onClick={handleReset}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Search;
