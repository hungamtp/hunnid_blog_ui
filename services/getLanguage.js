import { useQuery } from 'react-query';
import { URL } from 'constraints/env';
import axios from 'axios';
import { useContext } from 'react';
import { AllLanguageData } from '@/utils/all-languages-context';
export function useGetLanguages() {
  const { setLanguages } = useContext(AllLanguageData);
  const { data, ...rest } = useQuery('getLanguage', async () => {
    const data = await fetchLanguage().then(res => {
      setLanguages(res);
    });
    return data;
  });

  return {
    data,
    ...rest,
  };
}

async function fetchLanguage() {
  const { data } = await axios.get(`${URL}languages`);
  return data;
}
