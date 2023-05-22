import { useState, useContext } from 'react';
import { LanguageData } from '@/utils/languageContext';
import { useSearch } from 'services/useSearch';
const SearchBar = () => {
  const { language } = useContext(LanguageData);
  const [keyword, setKeyword] = useState('');
  const { data: posts } = useSearch({ page: 0, size: 5, language: language, keyword: keyword });
  const [shown, setShown] = useState(false);
  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
    setShown(!shown);
  };
  const handleOnChangeKeyword = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <>
      <div className="text-center subcribe-form search-form" style={{ position: 'relative' }}>
        <form style={{ maxWidth: '800px' }} autocomplete="off">
          <div className="mb-0">
            <input
              type="text"
              id="help"
              autocomplete="off"
              name="name"
              onChange={handleOnChangeKeyword}
              class="border bg-white rounded-pill"
              required=""
              placeholder="Search"
            />
            <button type="submit" className="btn btn-pills btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>
        <div className="search-result">
          <div className="search-result-bar" style={{ display: `${shown ? 'block' : 'none'}` }}>
            hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung
            hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung
            hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung
            hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung
            hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung hung
            hung hung hung
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
