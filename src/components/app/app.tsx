import React from 'react';
import styles from './appStyles';
import logo from '../../logo.svg';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import './app.css';
import MyCard from '../myCard/myCard';
import Typography from '@material-ui/core/Typography';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {
  render() {
    return (
      <div className={this.props.classes.appBody}>
        <img src={logo} className={this.props.classes.logo} alt="logo" />
        <p>
          src/App.tsx を編集するとこの画面に反映されます。<br />
          ファイルを保存すると自動で画面が更新されます。
        </p>
        <a
          className={this.props.classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography className={this.props.classes.card}>
          <MyCard></MyCard>
        </Typography>
      </div>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));