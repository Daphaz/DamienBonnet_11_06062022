import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  cover: string;
  id: string;
}

export const Thumb = ({ title, cover, id }: Props) => {
  const navigate = useNavigate();
  return (
    <picture className='thumb' onClick={() => navigate(`/house/${id}`)}>
      <img src={cover} alt='cover' />
      <p className='thumb__title'>{title}</p>
    </picture>
  );
};
