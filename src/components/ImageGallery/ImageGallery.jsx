import Image from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const Images = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.galleryItem} key={image.id}>
          <Image image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default Images;
