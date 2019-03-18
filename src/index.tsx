import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: 


/*
アプリケーションをオフライン状態でよりスムーズに動作させるには、
unregister()メソッドの代わりにregister()メソッドを呼び出します。
この変更によりサービスワーカーが起動するようになるので、
それに伴った落とし穴があることに注意してください。
サービスワーカーについては、以下の日本語サイトが分かりやすいです。
　https://qiita.com/y_fujieda/items/f9e765ac9d89ba241154
詳細については、https://bit.ly/CRA-PWA を参照してください。
*/
serviceWorker.unregister();
