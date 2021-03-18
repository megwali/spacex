import { useEffect, useState } from 'react';

const useLaunchList = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const url = 'https://api.spacexdata.com/v3/launches';
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      setLaunches(data);
    };

    fetchLaunches();
  }, []);

  return launches;
};


export default useLaunchList;
