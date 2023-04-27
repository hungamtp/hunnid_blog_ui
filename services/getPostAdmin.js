import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import qs from 'qs';

export function useGetPostsAdmin({ page, size, language }) {
  const { data, ...rest } = useQuery(['getPost', [page, size, language]], async () => {
    const data = await fetchPostsAmin({ page: page, size: size, language: language });

    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchPostsAmin(params) {
  const queryKey = qs.stringify(params);
  const { data } = await axios.get(`${URL}posts/manage?${queryKey}`);

  return data;
}
