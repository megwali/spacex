import { useEffect, useState } from 'react';

const useLaunchList = (id) => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const url = `https://api.spacexdata.com/v3/launches${id || ''}`;
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      setLaunches(id ? [data] : data);
    };

    fetchLaunches();
  }, [id]);

  return launches;
};


export default useLaunchList;
