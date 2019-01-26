import * as React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import TileGrid from '../../components/TileGrid';
import Sidebar from '../../components/Sidebar';
import * as numberCompositions from '../../compositions/numbers/numbers';
import { numberCardContents } from '../../compositions/numbers/numbers';
import { isNumber, isString, generateArrayFromLength, normalizeStringNumber } from '../../utils/';

class TileForm extends React.Component {
  state = {
    input: '',
    composition: null,
    roundedCorners: false
  }

  handleUserInput(evt) {
    evt.preventDefault();
    this.setState({
      input: evt.target.value,
      composition: this.setComposition(evt.target.value)
    });
  }

  setComposition(input) {
    if (isNumber(parseInt(input, 10)) && _.includes(generateArrayFromLength(10), parseInt(input, 10))) {
      const composition = numberCompositions.numbers[input];
      return composition;
    } else if (isString(input)) {
      const composition = normalizeStringNumber(input);
      if (isNumber(composition)) {
        return numberCompositions.numbers[composition];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  setRoundedCorners(evt) {
    // evt.preventDefault();
    this.setState((prevState) => ({
      roundedCorners: !prevState.roundedCorners
    }));
  }

  render() {
    return (
      <Wrapper>
        <Cell gridArea="Content">
          <TileGrid composition={this.state.composition} roundedCorners={this.state.roundedCorners} />
          <form>
            <div className="form-group">
              <label htmlFor="composition">Composition</label>
              <input
                type="text"
                name="composition"
                className="form-control"
                value={this.state.input}
                onChange={this.handleUserInput.bind(this)}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="corners"
                className="form-check-input"
                value={this.state.roundedCorners}
                checked={this.state.roundedCorners}
                onChange={this.setRoundedCorners.bind(this)}
              />
              <label htmlFor="corners" className="form-check-label">Rounded corners</label>
            </div>
          </form>
        </Cell>
        <Cell gridArea="Sidebar">
          <Sidebar title="Supported" cardContents={numberCardContents} />
        </Cell>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "Content Sidebar";
  padding-top: 20px;
`;

const Cell = styled.div`
  grid-area: ${(props) => props.gridArea};
  margin: 0 24px;
`;

export default TileForm;