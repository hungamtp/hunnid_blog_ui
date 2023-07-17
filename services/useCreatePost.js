import { URL } from 'constraints/env';
import axios from 'axios';

export async function createPost(createPostRequest) {
  const axiosClient = axios.create({
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const { data } = await axiosClient.post(`${URL}posts`, createPostRequest);

  return data;
}
