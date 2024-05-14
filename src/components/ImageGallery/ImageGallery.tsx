import { AppProps } from "../../App";
import Image from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImagesGalleryProps {
  images: AppProps[];
  onImageClick: (image: AppProps) => void;
}

const ImagesGallery = ({ images, onImageClick }: ImagesGalleryProps) => {
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

export default ImagesGallery;
