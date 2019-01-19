import * as React from 'react';
import styled from 'styled-components';
import TileGrid from '../../components/TileGrid';
class TileForm extends React.Component {
  state = {
    composition: '',
    roundedCorners: false
  }

  setComposition(evt) {
    evt.preventDefault();
    this.setState({
      composition: evt.target.value
    })
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
        <TileGrid roundedCorners={this.state.roundedCorners} />
        <form>
          <div className="form-group">
            <label htmlFor="composition">Composition</label>
            <input
              type="text"
              name="composition"
              className="form-control"
              value={this.state.composition}
              onChange={this.setComposition.bind(this)}
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
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export default TileForm;