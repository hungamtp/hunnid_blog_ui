import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';

export function useGetTags() {
  const { data, ...rest } = useQuery('getTags', async () => {
    const data = await fetchTags();
    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchTags() {
  const { data } = await axios.get(`${URL}tags`);
  return data;
}
