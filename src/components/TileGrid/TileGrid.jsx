import * as React from 'react';
import styled from 'styled-components';
import Tile from '../Tile';
import { generateArrayFromLength } from '../../utils';

const TileGrid = ({ composition, roundedCorners }) => {
  const generateGrid = () => {
    const normalizedComposition = (composition === null) ?
      generateArrayFromLength(25).map(() => false) :
      composition;
    return normalizedComposition.map((c, i) => {
      return (
        <Tile
          key={i}
          background={'#000'}
          isColored={c}
          roundedCorners={roundedCorners}
        />
      );
    });
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
  grid-gap: 5px;
  margin: auto;
  padding-bottom: 10px;
`;

export default TileGrid;