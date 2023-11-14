import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../app-constants';
import { Games, Groups, Home, Marketplace, Videos } from '../../pages';
import AppLayout from './AppLayout';

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<AppLayout />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.VIDEOS} element={<Videos />} />
      <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
      <Route path={ROUTES.GROUPS} element={<Groups />} />
      <Route path={ROUTES.GAMES} element={<Games />} />
    </Route>
  </Routes>
);

export default AppRouter;
