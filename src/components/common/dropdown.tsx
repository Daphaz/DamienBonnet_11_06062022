import { ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
  label: string;
};

export const DropDown = ({ children, label }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? 'dropdown open' : 'dropdown'}>
      <button
        className='dropdown__btn'
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <div className='dropdown__arrow'>
          <img src='/svg/arrow-dropdown.svg' alt='' />
        </div>
      </button>

      <div className='dropdown__content'>{children}</div>
    </div>
  );
};
