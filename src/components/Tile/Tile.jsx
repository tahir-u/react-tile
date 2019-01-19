import * as React from 'react';
import styled from 'styled-components';

const Tile = ({
  background,
  isColored,
  roundedCorners
}) => {
  return (
    <Wrapper background={background} isColored={isColored} roundedCorners={roundedCorners} />
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.isColored ? props.background : '#bbb'};
  border-radius: ${(props) => props.roundedCorners ? '50%' : '0'};
  transition: all .1s;
`;

export default Tile;