import React from 'react';

const Profile = React.lazy(() => import('./components/users/Profile'));
const AddTravel = React.lazy(() => import('./components/travel/AddTravel'));
const TravelList = React.lazy(() => import('./components/travel/TravelList'));
const SynchronizeWarehouse = React.lazy(() => import('./components/warehouse/SynchronizeWarehouse'));
const CityList = React.lazy(() => import('./components/warehouse/CityList'));
const Notfound = React.lazy(() => import('./components/auth/Notfound'));


export const routes = [
  { path: '/', exact: true, name: 'Home', component: AddTravel },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/travel/add', name: 'AddTravel', component: AddTravel },
  { path: '/travel/list', name: 'TravelList', component: TravelList },
  { path: '/warehouse', name: 'Warehouse', component: SynchronizeWarehouse },
  { path: '/destination/cityList', name: 'CityList', component: CityList },
  { name: 'NotFound', component: Notfound },
];

