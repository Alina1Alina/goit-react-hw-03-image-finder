import { Component } from 'react';
import { ButtonLoadMore } from './ButtonStyled'; 

export class Button extends Component {
  state = {};
  render() {
    return (
      <ButtonLoadMore onClick={this.props.handleIncrement} type="button">
        Load more
      </ButtonLoadMore>
    );
  }
}
