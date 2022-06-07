import { useCallback, useEffect, useState } from 'react';

import { HomeTemplate } from '@/components/template';

import { housesService } from '@/api/houses.service';
import { House } from '@/ts';

export const Home = () => {
  const [houses, setHouses] = useState<House[] | []>([]);

  const fetchHouses = useCallback(async () => {
    const datas = await housesService.getAll();
    setHouses(datas);
  }, []);

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  return <HomeTemplate houses={houses} />;
};
