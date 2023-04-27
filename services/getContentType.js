import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import { useContext } from 'react';
import { PostContentTypeData } from '@/utils/post-content-type-context';
export function useGetContentType() {
  const { setPostContentType } = useContext(PostContentTypeData);
  const { data, ...rest } = useQuery('getContentType', async () => {
    const data = await fetchContentype().then(res => {
      setPostContentType(res);
    });
    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchContentype() {
  const { data } = await axios.get(`${URL}posts/content-type`);
  return data;
}
