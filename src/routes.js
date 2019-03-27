import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./components/users/Profile'));
const AddTravel = React.lazy(() => import('./components/travel/AddTravel'));
const TravelList = React.lazy(() => import('./components/travel/TravelList'));
// const FootprintDetails = React.lazy(() => import('./components/footprints/FootprintDetails'));
const Notfound = React.lazy(() => import('./components/auth/Notfound'));
const Notifications = React.lazy(() => import('./components/dashboard/Notifications'));
const Map = React.lazy(() => import('./components/utils/Map_AddTravel'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/travel/add', name: 'AddTravel', component: AddTravel },
  { path: '/travel/list', name: 'TravelList', component: TravelList },
  // { path: '/footprint/:id', name: 'FootprintDetailsById', component: FootprintDetails },

  { path: '/footprint/:uid', name: 'FootprintsByUid', component: Map },
  { name: 'NotFound', component: Notfound },
];

export default routes;
