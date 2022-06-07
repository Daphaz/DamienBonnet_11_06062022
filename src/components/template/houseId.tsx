import { House } from '@/ts';

import { Carousel, Rating, Tags } from '../common';
import { Layout } from '../layout';

type Props = {
  house: House;
};

export const HouseIdTemplate = ({ house }: Props) => {
  return (
    <Layout>
      <Carousel
        items={house.pictures.map((picture, idx) => ({
          id: idx,
          src: picture,
        }))}
      />

      <section className='houseId__content'>
        <div className='houseId__info'>
          <h2>{house.title}</h2>
          <p>{house.location}</p>

          <Tags items={house.tags} />
        </div>

        <div className='houseId__extra'>
          {house.host && (
            <div className='houseId__user'>
              <div className='houseId__user_name'>
                {house.host.name.split(/(?=[A-Z])/).map((value) => (
                  <p key={`name-${value}`}>{value}</p>
                ))}
              </div>
              <div className='houseId__user_picture'>
                <img
                  src={house.host.picture}
                  alt={`profil of ${house.host.name}`}
                />
              </div>
            </div>
          )}
          <Rating value={house.rating} />
        </div>
      </section>
    </Layout>
  );
};
