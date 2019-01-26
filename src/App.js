import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import TileForm from './containers/TileForm';
import Navigation from './components/Navigation';
import TileEditor from './containers/TileEditor';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <AppWrapper>
          <Cell gridArea="Navigation">
            <Navigation />
          </Cell>
          <Cell gridArea="Header">
            <div className="jumbotron">
              <div className="container">
                <div className="row">
                  <h1 className="display-4">Enter a supported tile composition and see the result</h1>
                </div>
              </div>
            </div>
          </Cell>
          <Cell gridArea="Content">
            <Switch>
              <Route path="/view" exact={true} component={TileForm} />
              <Route path="/editor" exact={true} component={TileEditor} />
            </Switch>
          </Cell>
        </AppWrapper>
      </Router>
    );
  }
}

const AppWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "Navigation Navigation Navigation"
    "Header Header Header"
    "Content Content Content";
`;

const Cell = styled.div`
  grid-area: ${(props) => props.gridArea};
  text-align: center;
`;

export default App;
