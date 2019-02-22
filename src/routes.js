import React from 'react';


const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./components/users/Profile'));
const AddFootprint = React.lazy(() => import('./components/footprints/AddFootprint'));
const FootprintDetails = React.lazy(() => import('./components/footprints/FootprintDetails'));


const routes = [
  //{ path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/footprint/add', name: 'AddFootprint', component: AddFootprint },
  { path: '/footprint/:id', name: 'FootprintDetailsById', component: FootprintDetails },
];

export default routes;
