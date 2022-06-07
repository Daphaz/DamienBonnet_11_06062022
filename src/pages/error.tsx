import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <Layout hideFooter flex>
      <div className='error'>
        <div className='error__container'>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </Layout>
  );
};
