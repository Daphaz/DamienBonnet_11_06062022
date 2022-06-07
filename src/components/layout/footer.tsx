export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrap'>
        <img alt='Kasa' src='/svg/logo-white.svg' />
        <span>
          ©&nbsp;{new Date().getFullYear()}&nbsp;Kasa. All rights reserved
        </span>
      </div>
    </footer>
  );
};
