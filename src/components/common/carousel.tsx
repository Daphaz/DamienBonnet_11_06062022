import { useState } from 'react';

type ArrowProps = {
  type: 'left' | 'right';
  onClick: () => void;
};

type ItemType = {
  id: number;
  src: string;
};

interface CarouselProps {
  items: ItemType[];
}

const Arrow = ({ type, onClick }: ArrowProps) => {
  const isLeft = type === 'left';

  return (
    <button
      type='button'
      className={`carousel__arrow ${type}`}
      onClick={onClick}
    >
      <img src='/svg/arrow-carousel.svg' alt={isLeft ? '<' : '>'} />
    </button>
  );
};

export const Carousel = ({ items }: CarouselProps) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const needCarousel = items.length > 1;

  const nextSlide = () => {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === items.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(items.length);
    }
  };

  return (
    <div className='carousel'>
      {needCarousel && <Arrow type='left' onClick={prevSlide} />}
      <div className='carousel__inner'>
        {items.map((item, idx) => {
          const classes =
            slideIndex === idx + 1
              ? 'carousel__item visible'
              : 'carousel__item';
          return (
            <div key={`c-item-${item.id}`} className={classes}>
              <img src={item.src} alt={`carousel slide ${item.id}`} />
            </div>
          );
        })}
      </div>
      {needCarousel && <Arrow type='right' onClick={nextSlide} />}
    </div>
  );
};
