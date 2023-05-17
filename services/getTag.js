import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import { useContext } from 'react';
import { TagsData } from '@/utils/tags';
import { CreatePostData } from '@/utils/create-post-context';
export function useGetTags() {
  const { setTags } = useContext(TagsData);
  const { savedPost, setSavedPost } = useContext(CreatePostData);
  const { data, ...rest } = useQuery('getTags', async () => {
    const data = await fetchTags().then(res => {
      setTags(res);
      setSavedPost({ ...savedPost, tagIds: res.map(tag => tag.id) });
    });
    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchTags() {
  const { data } = await axios.get(`${URL}tags`);
  return data;
}
