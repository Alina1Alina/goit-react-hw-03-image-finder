import { Component } from 'react';
import { toast } from 'react-toastify';

import { GalleryList, Div } from './GalleryStyled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { getSearchGalleryApi } from 'Api/api';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    cards: [],
    page: 1,
    request: '',
    error: null,
    isLoading: false,
    modalData: false,

    totalHits: 0,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.request !== props.request) {
      return { page: 1, request: props.request };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, request } = this.state;

    if (
      (prevProps.request !== request && request !== '') ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setCards();
    }
  }

  setCards = async () => {
    const { page, request } = this.state;
    this.setState({ isLoading: true, error: null });

    try {
      const data = await getSearchGalleryApi(request, page);

      if (data.hits.length === 0) {
        this.setState({ cards: [] });
        toast.error(`no response on request ${request}`);
        throw new Error();
      }
      this.setState(prev => ({
        cards: page === 1 ? data.hits : [...prev.cards, ...data.hits],
      }));
      this.setState({ totalHits: data.totalHits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = modalData => {
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { cards, error, modalData, isLoading, totalHits } = this.state;

    return (
      <>
        {error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <GalleryList>
              {cards &&
                cards.map(card => {
                  return (
                    <ImageGalleryItem
                      key={card.id}
                      card={card}
                      handleItemClick={this.openModal}
                    />
                  );
                })}
            </GalleryList>

            {cards.length > 0 && !isLoading && cards.length !== totalHits && (
              <Div>
                <Button handleIncrement={this.changePage} />
              </Div>
            )}
            {isLoading && <Loader />}
          </>
        )}

        {modalData && <Modal onClose={this.closeModal} {...modalData} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
request: PropTypes.string.isRequired,

}
