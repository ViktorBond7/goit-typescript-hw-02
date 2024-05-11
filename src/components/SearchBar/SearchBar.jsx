import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <FaSearch className={css.icon} />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
