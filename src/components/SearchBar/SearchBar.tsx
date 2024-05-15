import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const queryInput = form.elements.namedItem(
      "query"
    ) as HTMLInputElement | null;

    if (queryInput && queryInput.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }

    if (queryInput) {
      onSearch(queryInput.value);
      form.reset();
    }
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
