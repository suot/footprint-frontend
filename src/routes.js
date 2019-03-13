import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./components/users/Profile'));
const AddFootprint = React.lazy(() => import('./components/footprints/AddFootprint'));
// const FootprintDetails = React.lazy(() => import('./components/footprints/FootprintDetails'));
const Notfound = React.lazy(() => import('./components/auth/Notfound'));
const Notifications = React.lazy(() => import('./components/dashboard/Notifications'));
const MyFootprints = React.lazy(() => import('./components/map/MyFootprints'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/footprint/add', name: 'AddFootprint', component: AddFootprint },
  // { path: '/footprint/:id', name: 'FootprintDetailsById', component: FootprintDetails },

  { path: '/footprint/:uid', name: 'FootprintsByUid', component: MyFootprints },
  { name: 'NotFound', component: Notfound },
];

export default routes;
