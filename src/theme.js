import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a1931', // Deep Blue
    },
    secondary: {
      main: '#e8eaf6', // Light Cream
    },
    tertiary: {
      main: '#76d275', // Light Green
    },
    info: {
      main: '#b39ddb', // Soft Purple
    },
    text: {
      primary: '#212121', // Dark Gray
      secondary: '#757575', // Light Gray
    },
    background: {
      default: '#f5f5f5', // Light Gray Background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
