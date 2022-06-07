import { Route, Routes } from 'react-router-dom';

import { About, Error, Home, HouseId } from '@/pages';

const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'About',
    path: '/about',
    element: About,
  },
  {
    name: 'HouseId',
    path: '/house/:houseId',
    element: HouseId,
  },
];

export const Root = () => {
  return (
    <Routes>
      {routes.map(({ path, name, element: Element }) => (
        <Route path={path} element={<Element />} key={name} />
      ))}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
