export default {
  items: [
    // {
    //   name: 'Dashboard',
    //   url: '/',
    //   icon: 'icon-speedometer',
    //   // badge: {
    //   //   variant: 'info',
    //   //   text: 'NEW',
    //   // },
    // },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Record travel',
    //   url: '/travel/add',
    //   icon: 'icon-drop',
    // },
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
