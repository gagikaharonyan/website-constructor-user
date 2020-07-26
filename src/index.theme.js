import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(theme => ({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
     
    },
    palette: {
      text: {
        primary: 'black',
        secondary: '#474747'
      }
    }
    
}));

export default theme;