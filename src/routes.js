import React from 'react';
import DefaultLayout from './components/defaultLayout/DefaultLayout';

const Dashboard = React.lazy(() => import('./components/dashboard'));



const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;
