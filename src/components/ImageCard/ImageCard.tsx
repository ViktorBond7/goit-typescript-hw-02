import css from "./ImageCard.module.css";
import { AppProps } from "../../App";

interface ImageCardProps {
  image: AppProps;
  onClick: (image: AppProps) => void;
}

const Image = ({ image, onClick }: ImageCardProps) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div className={css.container}>
      <img
        onClick={handleClick}
        className={css.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default Image;
