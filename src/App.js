import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import TileGrid from './components/TileGrid';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <TileGrid />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #23262d;
`;

export default App;
