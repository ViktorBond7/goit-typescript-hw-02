import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React, { FC } from "react";
const customStyles = {
  content: {
    top: "400px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalWindowProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
  };
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({
  image,
  modalIsOpen,
  closeModal,
}) => {
  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div>
          {modalIsOpen && (
            <>
              <img
                className={css.icon}
                src={image.urls.regular}
                alt={image.alt_description}
              />

              <div>
                <p>{image.user.name}</p>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
