import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import qs from 'qs';

export function useSearch({ page, size, language, keyword }) {
  const { data, ...rest } = useQuery(['getPost', [page, size, language, keyword]], async () => {
    const data = await search({ page: page, size: size, language: language, keyword: keyword });

    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function search(params) {
  const queryKey = qs.stringify(params);
  const { data } = await axios.get(`${URL}posts/search?${queryKey}`);

  return data;
}
