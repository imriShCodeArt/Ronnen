import { createTheme, useTheme } from '@mui/material/'

const myTheme = () => {
  const theme = useTheme()
  return createTheme({
    direction: 'rtl',
    palette: {
      primary: {
        main: '#002F61',
      },
      info: {
        main: '#ACEEDC',
      },
      secondary: {
        main: '#F5AE2C',
        light: '#FFE6B7',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          direction: 'rtl',
        },
      },
      MuiLink: {
        defaultProps: {
          color: theme.palette.info.main,
          underline: 'none',
        },
      },
    },
  })
}

export default myTheme
