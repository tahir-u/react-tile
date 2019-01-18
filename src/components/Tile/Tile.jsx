import * as React from 'react';
import styled from 'styled-components';

const Tile = ({
  background,
  isColored
}) => {
  return (
    <Wrapper background={background} isColored={isColored} />
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.isColored ? props.background : '#ccc'};
`;

export default Tile;