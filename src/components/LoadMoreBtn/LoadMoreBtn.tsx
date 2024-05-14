import css from "./LoadMoreBtn.module.css";
const MoreBtn = ({ onClick }) => {
  return (
    <>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </>
  );
};
export default MoreBtn;
