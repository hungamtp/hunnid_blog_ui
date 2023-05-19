import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';

export function useGetPostDetail({ postId, language }) {
  const { data, ...rest } = useQuery(['getPostDetail', [postId, language]], async () => {
    const data = await getPostDetail({ postId: postId, language: language });

    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function getPostDetail({ postId: postId, language: language }) {
  const { data } = await axios.get(`${URL}posts/${postId}?language=${language}`);
  return data;
}
