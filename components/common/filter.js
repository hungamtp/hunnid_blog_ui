import { TagsData } from '@/utils/tags';
import { useContext } from 'react';
const { Chip } = require('@mui/material');

const Filter = () => {
  const { tags, setTags } = useContext(TagsData);

  const onRemoveTag = tagId => {
    if (tags.length > 1) {
      const newTags = tags.filter(item => item.id !== tagId);
      setTags(newTags);
    }
  };
  return (
    <>
      {tags &&
        tags.map(tag => (
          <Chip
            key={tag.id}
            label={tag.tag}
            size="small"
            variant="outlined"
            onDelete={() => onRemoveTag(tag.id)}
            style={{ marginLeft: '2px' }}
          />
        ))}
    </>
  );
};
export default Filter;
