import * as React from 'react';
import Slide from '@mui/material/Slide';
import PostSearch from 'components/common/post-search';
const SearchResult = ({ shown, data }) => {
  return (
    <Slide direction="down" in={shown} mountOnEnter unmountOnExit>
      <div className="search-result-bar">{data && data.map(post => <PostSearch post={post} />)}</div>
    </Slide>
  );
};

export default SearchResult;
