import { useMutation } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';

export async function showOrHidePost(showOrHidePostRequest) {
  const axiosClient = axios.create({
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const { data } = await axiosClient.patch(`${URL}posts`, showOrHidePostRequest);
  return data;
}
