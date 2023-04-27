import { useMutation } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';

export async function createPost(createPostRequest) {
  const { data } = await axios.post(`${URL}posts`, createPostRequest);
  return data;
}
