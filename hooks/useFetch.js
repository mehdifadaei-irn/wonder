import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log("error Dadash");
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, data };
};

export default useFetch;
