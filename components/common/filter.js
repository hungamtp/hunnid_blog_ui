const { Chip } = require('@mui/material');

const Filter = () => {
  return (
    <>
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
