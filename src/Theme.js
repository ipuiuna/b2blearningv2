import { createMuiTheme } from '@material-ui/core/styles';
require('typeface-montserrat');

const muitheme = createMuiTheme({
  palette: {
    primary: {
      main: '#825542',
      light: '#B3826D',
      dark: '#532C1B'
    },
    secondary: {
      main: '#F5A800',
      light: '#FFD94A',
      dark: '#BD7900'
    },
    text: {
      primary: '#fff',
      secondary: '#F5A800'
    }
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: '#825542'
      }
    },
    MuiFab: {
      root: {
        backgroundColor: '#FFF'
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 15
      }
    },
    MuiButton: {
      root: {
        borderRadius: 15
      },
      contained: {
        '&$disabled': {
          boxShadow:
            '-2px 2px 1px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        }
      },
      disabled: {}
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
    h2: {
      fontSize: 24,
      fontWeight: 700
    },
    h3: {
      fontSize: 16,
      fontWeight: 700
    },
    h4: {
      fontSize: 8
    },
    h6: {
      fontSize: 15,
      fontWeight: 700,
      color: '#825542'
    }
  }
});

export default muitheme;
