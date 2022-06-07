type Props = { value: number };

export const Rating = ({ value }: Props) => {
  return (
    <div className='rating'>
      {Array(5)
        .fill('')
        .map((_, idx) => (
          <svg
            key={`stars-${idx}`}
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z'
              fill={`var(${idx <= value ? '--clr-primary' : '--clr-grey-300'})`}
            />
          </svg>
        ))}
    </div>
  );
};
