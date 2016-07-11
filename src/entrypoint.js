import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';

injectTapEventPlugin();

ReactDOM.render(<Main />, document.getElementById('content'));
