import { useState, useContext } from 'react';
import { LanguageData } from '@/utils/languageContext';
import { useSearch } from 'services/useSearch';
import { ClickAwayListener } from '@mui/material';
import PostSearch from 'components/common/post-search';
import Slide from '@mui/material';
import Box from '@mui/material';
import FormControlLabel from '@mui/material';
import Switch from '@mui/material';
import SearchResult from './search-result';
const SearchBar = () => {
  const { language } = useContext(LanguageData);

  const [keyword, setKeyword] = useState('');
  const [postsData, setPostsData] = useState([]);
  const [shown, setShown] = useState(false);
  const handleSearch = e => {
    e.preventDefault();
    setShown(true);
    useSearch({ page: 0, size: 5, language: language, keyword: keyword }).then(res => {
      setPostsData(res.data);
    });
  };
  console.log(postsData);
  const handleOnChangeKeyword = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleClickAway = () => {
    setShown(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="text-center subcribe-form search-form" style={{ position: 'relative' }}>
          <form style={{ maxWidth: '80%' }} autocomplete="off">
            <div className="mb-0">
              <input
                type="text"
                id="help"
                autocomplete="off"
                name="name"
                onChange={handleOnChangeKeyword}
                class="border bg-white rounded-pill"
                required=""
                placeholder="search"
              />
              <button
                type="submit"
                className="btn btn-pills"
                style={{ backgroundColor: '#4f4f50', color: '#dfe0e0' }}
                onClick={handleSearch}
              >
                search
              </button>
            </div>
          </form>
          <div className="search-result">
            <SearchResult shown={shown} data={postsData && postsData} />
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default SearchBar;
