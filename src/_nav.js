export const navigation =  {
  items: [
    {
      name: 'Footprint',
      url: '/travel',
      icon: 'icon-location-pin',
      class: 'large',
      children: [
        {
          name: 'Mark your footprints',
          url: '/travel/add',
          //icon: 'icon-pencil',
          class: 'medium',
        },
        {
          name: 'List your footprints',
          url: '/travel/list',
          //icon: 'icon-list',
          class: 'medium',
        },
      ],
    },
    {
      name: 'Destination',
      url: '/destination',
      icon: 'icon-globe',
      class: 'large',
      children: [
        {
          name: 'The top cities',
          url: '/destination/cityList',
          //icon: 'icon-badge',
          class: 'medium',
        },
        {
          name: 'Your next trip',
          url: '/destination/recommendations',
          //icon: 'icon-map',
          class: 'medium',
        },
      ],
    }
  ],
};

export const navigation_admin =  {
  items: [
    {
      name: 'Footprint',
      url: '/travel',
      icon: 'icon-location-pin',
      class: 'large',
      children: [
        {
          name: 'Mark your footprints',
          url: '/travel/add',
          //icon: 'icon-pencil',
          class: 'medium',
        },
        {
          name: 'List your footprints',
          url: '/travel/list',
          //icon: 'icon-list',
          class: 'medium',
        },
      ],
    },
    {
      name: 'Destination',
      url: '/destination',
      icon: 'icon-globe',
      class: 'large',
      children: [
        {
          name: 'The top cities',
          url: '/destination/cityList',
          //icon: 'icon-badge',
          class: 'medium',
        },
        {
          name: 'Your next trip',
          url: '/destination/recommendations',
          //icon: 'icon-map',
          class: 'medium',
        },
      ],
    },
    {
      name: 'Warehouse',
      url: '/warehouse',
      icon: 'icon-home',
      class: 'large'
    },
  ],
};