import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

export function ViewLargerImage({ images, moveNext, movePrevious, photoIndex, onClose }) {
  return (
    <div className="my-modal">
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + (images.length - 1)) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={movePrevious}
        onMoveNextRequest={moveNext}
      />
    </div>
  );
}

ViewLargerImage.propTypes = {
  images: PropTypes.array.isRequired,
  moveNext: PropTypes.func.isRequired,
  movePrevious: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ViewLargerImage;
