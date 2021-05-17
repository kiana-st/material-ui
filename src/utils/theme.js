import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#007ec1',
    },
    secondary: {
      main: '#007ec1',
    },
    type: 'dark',
  },
});

export default Theme;
