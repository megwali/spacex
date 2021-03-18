import { useEffect, useState } from 'react';

const useLaunchList = (id) => {
  const [error, setError] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLaunches = async () => {
      setLoading(true);
      setError(false);
      const url = `https://api.spacexdata.com/v3/launches${id || ''}`;
      try {
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();
        setLaunches(id ? [data] : data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, [id]);

  return { error, launches, loading };
};


export default useLaunchList;
