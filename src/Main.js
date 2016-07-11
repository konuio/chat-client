import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import history from './history';
import { IndexRoute, Route, Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PasswordView from './PasswordView';
import React from 'react';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          <Route path="/">
            <IndexRoute component={PasswordView} />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Main;
