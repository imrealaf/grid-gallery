import React, { useState } from "react";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { Image } from "../types/Image";

interface Props {
  image: Image;
}

const GalleryGridItem: React.FC<Props> = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const style = {
    backgroundImage: `url(${image.src})`,
  };

  const formatDate = (seconds: number) => {
    const date = new Date(seconds * 1000);
    return moment(date)
      .startOf("day")
      .fromNow();
  };

  return (
    <div className="gallery-grid-item" style={style} onClick={handleShowModal}>
      <div onClick={e => e.stopPropagation()}>
        <Modal
          className="image-modal"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Body>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  className="img-fluid"
                  src={image.src}
                  alt={image.caption}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="p-3">
                  <h4>{image.caption}</h4>
                  <p>Posted {formatDate(image.created.seconds)}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default GalleryGridItem;
