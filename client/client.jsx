import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import 'antd/dist/antd.less';

import App from './src/App';

const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector('#root'));