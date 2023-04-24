import { Component } from 'react';
import { ButtonLoadMore } from './ButtonStyled'; 
import PropTypes from 'prop-types';


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

Button.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
}

