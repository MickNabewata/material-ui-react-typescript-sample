import React, { Component } from 'react';
import styles from './appStyles';
import logo from '../../logo.svg';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../../withRoot';
import './app.css';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

class App extends React.Component<Prop, State> {
  render() {
    return (
      <div className={this.props.classes.appBody}>
        <img src={logo} className={this.props.classes.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={this.props.classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default withRoot(withStyles(styles, { withTheme : true })(App));