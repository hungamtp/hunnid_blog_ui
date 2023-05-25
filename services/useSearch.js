import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import qs from 'qs';

export async function useSearch({ page, size, language, keyword }) {
  const queryKey = qs.stringify({ page, size, language, keyword });
  const { data } = await axios.get(`${URL}posts/search?${queryKey}`);

  return data;
}
