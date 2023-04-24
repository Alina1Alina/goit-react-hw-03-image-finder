import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalW } from './ModalStyled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEvent);
  }

  handleEvent = e => {
    if (e.code === 'Escape' || (e.type === 'click' && e.target === e.currentTarget)) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, user } = this.props;
    return createPortal(
      <Overlay onClick={this.handleEvent}>
        <ModalW>
          <img src={largeImageURL} alt={user} />
        </ModalW>
      </Overlay>,
      modalRoot
    );
  }
}
  Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  };

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackDropClick = e => {
//     const backDrop = e.currentTarget;
//     const modal = e.target;
//     if (backDrop === modal) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, user } = this.props;
//     return createPortal(
//       <Overlay onClick={this.handleBackDropClick}>
//         <ModalW>
//           <img src={largeImageURL} alt={user} />
//         </ModalW>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }