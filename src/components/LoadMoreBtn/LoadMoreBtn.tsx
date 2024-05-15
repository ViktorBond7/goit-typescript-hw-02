import css from "./LoadMoreBtn.module.css";

interface MoreBtnProps {
  onClick: () => void;
}

const MoreBtn = ({ onClick }: MoreBtnProps) => {
  return (
    <>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </>
  );
};
export default MoreBtn;
