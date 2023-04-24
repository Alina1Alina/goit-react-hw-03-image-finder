import { Component } from 'react';
import { ItemsGallery, ImageItems } from './ItemsStyled';

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


