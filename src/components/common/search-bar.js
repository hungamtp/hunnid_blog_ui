import { useState, useContext } from 'react';
import { LanguageData } from '@/utils/languageContext';
import { useSearch } from 'services/useSearch';
import { ClickAwayListener } from '@mui/material';
import PostSearch from 'components/common/post-search';
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
  const handleOnChangeKeyword = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleClickAway = () => {
    console.log('object');
    setShown(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
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
              {postsData.length > 0 && postsData.map(post => <PostSearch post={post} />)}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default SearchBar;
