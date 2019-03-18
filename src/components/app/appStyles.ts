import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    appBody : {
      backgroundColor: (theme.palette.type == 'dark')? theme.palette.primary.dark : theme.palette.primary.light,
      minHeight: '100vh',
      color: theme.palette.text.primary,
      textAlign: 'center'
    },
    logo : {
      height: '40vmin',
      pointerEvents: 'none',
      animation: 'App-logo-spin infinite 20s linear'
    },
    appLink : {
      color : theme.palette.text.primary
    }
  });

export default styles;