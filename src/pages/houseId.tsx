import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { HouseIdTemplate } from '@/components/template';

import { housesService } from '@/api/houses.service';
import { House } from '@/ts';

export const HouseId = () => {
  const [house, setHouse] = useState<House | undefined>(undefined);
  const { houseId } = useParams();
  const navigate = useNavigate();

  const fetchHouse = useCallback(async () => {
    const data = await housesService.getById(houseId || '');
    if (!data) {
      return navigate('/not-found');
    }
    setHouse(data);
  }, [houseId, navigate]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  if (!house) return null;

  return <HouseIdTemplate house={house} />;
};
