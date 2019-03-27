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
      name: 'Travel',
      url: '/travel',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Record a travel',
          url: '/travel/add',
          icon: 'icon-drop',
        },
        {
          name: 'List travel records',
          url: '/travel/list',
          icon: 'icon-puzzle',
        },
      ],
    },
  ],
};
