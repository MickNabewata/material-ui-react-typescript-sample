import React from 'react';
import styles from './myCardStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class MyCard extends React.Component<Prop, State> {
  render() {
    return (
      <Card className={ this.props.classes.cardBody }>
          <CardContent>
              <p className={this.props.classes.title}>カード コンポーネント タイトル</p>
              <p>本文</p>
          </CardContent>
      </Card>
    );
  }
}

/** スタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(MyCard);