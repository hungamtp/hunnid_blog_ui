import { useMutation } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';

export async function showOrHidePost(showOrHidePostRequest) {
  const { data } = await axios.patch(`${URL}posts`, showOrHidePostRequest);
  return data;
}
