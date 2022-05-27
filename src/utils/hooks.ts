import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import ROUTES from './routes';
import { ERRORS } from 'utils/copy';

// We're mimicking something done by a wrapper like
// Appolo Client.
export const useInitialise = (route: string): [string, boolean, any] => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (pathname !== ROUTES.MAIN) {
        return setLoading(false);
      }

      try {
        const { data } = await axios.get(route);

        setData(data);
      } catch (error) {
        setError(ERRORS.STANDARD);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pathname]);

  return [error, loading, data];
};
