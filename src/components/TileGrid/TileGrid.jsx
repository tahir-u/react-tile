import * as React from 'react';
import styled from 'styled-components';
import Tile from '../Tile';

const TileGrid = () => {
  const generateGrid = (numberOfTiles) => {
    return Array(numberOfTiles).fill('').map((a, i) => <Tile key={i} background={'#ccc'} isColored={false} />);
  }

  return (
    <Grid>
      {generateGrid(25)}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  max-width: 500px;
  height: 500px;
  grid-gap: 10px;
  margin: auto;
  padding-top: 80px;
`;

export default TileGrid;