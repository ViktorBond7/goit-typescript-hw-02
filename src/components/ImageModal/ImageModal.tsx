import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FC } from "react";
import { AppProps } from "../../App";

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

export interface ModalWindowProps {
  image: AppProps;
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

              <div>{<p>{image.user.name}</p>}</div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
