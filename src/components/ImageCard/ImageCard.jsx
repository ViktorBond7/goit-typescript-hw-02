import css from "./ImageCard.module.css";
const Image = ({ image, onClick }) => {
  return (
    <>
      <div className={css.container}>
        <img
          onClick={onClick}
          className={css.galleryImage}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
    </>
  );
};
export default Image;
