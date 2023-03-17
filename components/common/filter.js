import { useGetTags } from 'services/getTag';

const { Chip } = require('@mui/material');

const Filter = () => {
  const { data, isLoading, isFetching } = useGetTags();
  console.log('data', data);
  return (
    <>
      <Chip
        label="text"
        size="small"
        variant="outlined"
        color="success"
        onDelete={() => {
          console.log('object');
        }}
        style={{ marginLeft: '2px' }}
      />
      <Chip
        label="text"
        size="small"
        variant="outlined"
        onDelete={() => {
          console.log('object');
        }}
        style={{ marginLeft: '2px' }}
      />
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
