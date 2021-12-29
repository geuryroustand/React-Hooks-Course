import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        setState({
          loading: false,
          error: null,
          data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return state;
};
