type Props = {
  items: string[];
};

export const Tags = ({ items }: Props) => {
  return (
    <div className='tags'>
      {items.map((value) => (
        <span key={`tag-${value}`} className='tags__item'>
          {value}
        </span>
      ))}
    </div>
  );
};
