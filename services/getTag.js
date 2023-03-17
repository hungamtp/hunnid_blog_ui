import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import { useContext } from 'react';
import { TagsData } from '@/utils/tags';
export function useGetTags() {
  const { setTags } = useContext(TagsData);
  const { data, ...rest } = useQuery('getTags', async () => {
    const data = await fetchTags().then(res => {
      setTags(res);
    });
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
