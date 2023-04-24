import { Component } from 'react';
import { ItemsGallery, ImageItems } from './ItemsStyled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, user } = this.props.card;
    return (
      <ItemsGallery
        onClick={() => this.props.handleItemClick({ largeImageURL, user })}
      >
        <ImageItems src={webformatURL} alt="" />
      </ItemsGallery>
    );
  }
}

ImageGalleryItem.propTypes = {
  card: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }).isRequired,
    handleItemClick: PropTypes.func.isRequired,

}


