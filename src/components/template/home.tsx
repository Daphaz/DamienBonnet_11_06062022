import { Thumb } from '@/components/common';
import { Layout } from '@/components/layout';

import { House } from '@/ts';

interface Props {
  houses: House[];
}

export const HomeTemplate = ({ houses }: Props) => {
  return (
    <Layout>
      <section className='home__hero'>
        <img src='/images/bg-hero-home.jpg' alt='Hero home' />
        <span>Chez vous, partout et ailleurs</span>
      </section>

      <section className='home__list'>
        <div className='home__grid'>
          {houses.map(({ title, cover, id }) => (
            <Thumb key={`thumb-${id}`} title={title} cover={cover} id={id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
