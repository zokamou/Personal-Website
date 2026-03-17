import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#511e43',
    },
    background: {
      default: '#511e43',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#9a384a',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: "'Jersey 10', monospace",
  },
});

export default theme;
