import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './SearchbarStyled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.request.trim() === '') {
      return toast.error('enter a query');
    }
    this.props.onSubmit(this.state.request);
    e.currentTarget.elements.request.value = '';
  };

  handlerChange = e => {
    this.setState({ request: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearch
              style={{
                width: 20,
                height: 20,
                marginTop: 6,
              }}
            />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handlerChange}
            type="text"
            autocomplete="off"
            name="request"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,

}


