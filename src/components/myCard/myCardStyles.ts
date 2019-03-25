import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    cardBody : {
        backgroundColor : (theme.palette.type == 'dark')? theme.palette.primary.light : theme.palette.primary.dark,
        color : theme.palette.text.secondary,
        textAlign : 'center',
        maxWidth : 400,
        margin : 'auto'
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    }
  });

export default styles;