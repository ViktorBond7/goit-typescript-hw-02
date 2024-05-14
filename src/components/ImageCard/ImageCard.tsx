import css from "./ImageCard.module.css";
import { AppProps } from "../../App";

interface ImageCardProps {
  image: AppProps;
  onClick: () => void;
}

const Image = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={css.container}>
      <img
        onClick={onClick}
        className={css.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default Image;
