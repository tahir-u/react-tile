import * as React from 'react';
import styled from 'styled-components';
import Tile from '../Tile';

const TileGrid = ({ roundedCorners }) => {
  const generateGrid = (numberOfTiles) => {
    return Array(numberOfTiles).fill('').map((a, i) => <Tile key={i} background={'#ccc'} isColored={false} roundedCorners={roundedCorners} />);
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
  width: 100%;
  max-width: 400px;
  height: 400px;
  grid-gap: 10px;
  margin: auto;
  padding-bottom: 10px;
`;

export default TileGrid;