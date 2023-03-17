import { useGetTags } from 'services/getTag';

const { Chip } = require('@mui/material');

const Filter = ({ tags }) => {
  console.log(tags);
  return (
    <>
      {tags &&
        tags.map(tag => {
          <Chip
            key={tag.id}
            label={tag['tag']}
            size="small"
            variant="outlined"
            onDelete={() => {
              console.log('object');
            }}
            style={{ marginLeft: '2px' }}
          />;
        })}

      <Chip
        label="text"
        size="small"
        variant="outlined"
        onDelete={() => {
          console.log('object');
        }}
        style={{ marginLeft: '2px' }}
      />
    </>
  );
};
export default Filter;
