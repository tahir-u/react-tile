import * as React from 'react';
import styled from 'styled-components';

const Sidebar = ({ title, cardContents }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {(cardContents) && cardContents.map((c, i) => {
        return (
          <CardWrapper key={i}>
            <h6>{c.title}</h6>
            <p>
              {c.contents.join(', ')}
            </p>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
`;

export default Sidebar;