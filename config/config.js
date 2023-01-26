import Account from '@mui/icons-material/AccountBalanceOutlined'
import Logout from '@mui/icons-material/LogoutOutlined'
// import Profile from '@mui/icons-material/PersonOutline'
import Settings from '@mui/icons-material/SettingsOutlined'

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
        id: 0,
        title: 'בית',
        slug: '',
      },
      {
        id: 1,
        title: 'אודות',
        slug: 'about',
      },
      {
        id: 3,
        title: 'קהילה',
        slug: 'community',
        items: [
          {
            id: 10,
            title: 'התומכים שלנו',
            slug: 'contributors',
          },
          {
            id: 11,
            title: 'הצוות',
            slug: 'team',
          },
          {
            id: 12,
            title: 'בלוג',
            slug: 'blog',
          },
        ],
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
  user: {
    options: {
      main: [
        // {
        //   id: 1,
        //   title: 'פרופיל',
        //   slug: 'profile',
        //   icon: <Profile />,
        //   options: undefined,
        // },
        {
          id: 2,
          title: 'חשבון',
          slug: 'account',
          icon: <Account />,
          options: undefined,
        },
        {
          id: 3,
          title: 'הגדרות',
          slug: 'settings',
          icon: <Settings />,
          options: undefined,
        },
      ],
      footer: [
        {
          id: 5,
          title: 'יציאה',
          slug: 'logout',
          options: <Logout />,
        },
      ],
    },
  },
}

export default config
