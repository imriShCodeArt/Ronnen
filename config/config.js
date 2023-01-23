const config = {
  header: {
    sticky: true,
    logo: true, //  if 'logo' is true- renders Logo component instead of MenuButton
    navbar: process.env.NAVBAR_INLINE,
  },
  navigation: {
    color: 'info',
    activeColor: 'secondary',
    items: [
      {
        id: 1,
        title: 'אודות',
        slug: 'about',
      },
      {
        id: 3,
        title: 'קהילה',
        slug: 'community',
        // items: [
        //   {
        //     id: 10,
        //     title: 'גלריה',
        //     slug: 'gallery',
        //   },
        //   {
        //     id: 11,
        //     title: 'הצוות',
        //     slug: 'us',
        //   },
        //   {
        //     id: 12,
        //     title: 'בלוג',
        //     slug: 'blog',
        //   },
        // ],
      },
      {
        id: 4,
        title: 'צור קשר',
        slug: 'contact',
      },
    ],
  },
  drawer: {
    anchor: 'left',
  },
  user: undefined,
  // {
  //   id: '1',
  //   email: 'imriwain@gmail.com',
  //   password: '1234',
  //   firstName: 'imri',
  //   lastName: 'wain',
  //   options: {
  //     main: [
  //       {
  //         id: 1,
  //         title: 'Profile',
  //         slug: 'profile',
  //         icon: <Profile />,
  //         options: undefined,
  //       },
  //       {
  //         id: 2,
  //         title: 'Account',
  //         slug: 'account',
  //         icon: <Account />,
  //         options: undefined,
  //       },
  //       {
  //         id: 3,
  //         title: 'Settings',
  //         slug: 'settings',
  //         icon: <Settings />,
  //         options: undefined,
  //       },
  //     ],
  //     footer: [
  //       {
  //         id: 5,
  //         title: 'Logoout',
  //         slug: 'logout',
  //         options: undefined,
  //       },
  //     ],
  //   },
  // },
}

export default config
