import { formatError } from '@/lib';

import datas from '@/data/houses.json';

import { House } from '@/ts';

const houses = datas as unknown as House[];

const getAll = async (): Promise<House[] | []> => {
  try {
    return houses;
  } catch (e) {
    console.error('getAllHouses', formatError(e));
    return [];
  }
};

const getById = async (houseId: string): Promise<House | undefined> => {
  try {
    const house = houses.find(({ id }) => id === houseId);
    return house;
  } catch (e) {
    console.error('getByHouseId', formatError(e));
    return;
  }
};

export const housesService = {
  getAll,
  getById,
};
