import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blueGrey';
import secondaryColor from '@material-ui/core/colors/grey';
import errorColor from '@material-ui/core/colors/orange';
import CssBaseline from '@material-ui/core/CssBaseline';

/** アプリケーション全体に適用するテーマ */
const theme = createMuiTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    error: errorColor,
    type: 'dark',
    text: {
      primary: 'white',
      secondary: 'black',
      disabled: 'gray',
      hint: 'white'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

/** テーマとスタイルを適用したコンポーネントを返却 */
function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

/** テーマとスタイルを適用したコンポーネントを返却 */
export default withRoot;
