import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import qs from 'qs';

export function useGetPosts({ page, size, language, tagIds }) {
  const { data, ...rest } = useQuery(['getPost', [page, size, language, tagIds]], async () => {
    const data = await fetchPosts({ page: page, size: size, language: language, tagIds: tagIds });

    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchPosts(params) {
  const queryKey = qs.stringify(params);
  const { data } = await axios.get(`${URL}posts?${queryKey}`);

  return data;
}
