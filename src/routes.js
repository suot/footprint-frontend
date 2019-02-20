import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./components/users/Profile'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
