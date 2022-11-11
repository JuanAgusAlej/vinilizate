import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const axiosFuntion = async () => {
    const { data } = await axios(url, {
      withCredentials: true,
    });
    setDataFetch({
      loading: false,
      data,
    });
  };
  useEffect(() => {
    axiosFuntion();
  }, [url]);
  return dataFetch;
};

export default useFetch;
