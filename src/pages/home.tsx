import { Layout } from '@/components/layout';

export const Home = () => {
  return (
    <Layout>
      <div className='home__hero'>
        <img src='/images/bg-hero-home.jpg' alt='Hero home' />
        <span>Chez vous, partout et ailleurs</span>
      </div>
    </Layout>
  );
};
