export type HouseHostType = {
  name: string;
  picture: string;
};

export interface House {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HouseHostType;
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
}
