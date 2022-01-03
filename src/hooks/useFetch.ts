/**
 * File: /src/hooks/useFetch.ts
 * Project: shoepify
 * Purpose: Currently testing out best way to fetch data from URI
 * 
 * @author Myles Berueda
 * @date   Monday January 3rd 2022
 * *****
 * Modified: Monday January 3rd 2022 7:10:38 am
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
**/
import React, { useState, useEffect } from 'react';

export const useFetch = async (url: string, options?: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [errors, setErrors] = useState<any>(null);
  
  const fetchData = async () => {
    setLoading(true);
    // Bad. Later I'll change this to set an error if there are fetch erros
    setData(await fetch(url, options));
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
}
