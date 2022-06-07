import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header container'>
      <Link to='/' className='header__logo'>
        <img src='/svg/logo-primary.svg' alt='Kasa' />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to='/' className='header__link'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='header__link'>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
