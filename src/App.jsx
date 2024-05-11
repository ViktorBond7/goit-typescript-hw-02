import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import searchImages from "./components/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Images from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import MoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ModalWindow from "./components/ImageModal/ImageModal";
import Error from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imege, setImage] = useState(null);

  const openModal = (image) => {
    setModalIsOpen(true);
    setImage(image);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const searchImagesl = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setError(false);
        setLoader(true);
        const { respons, totalPages } = await searchImages(
          query.split("/")[1],
          page
        );
        setImages((prevImages) => [...prevImages, ...respons]);

        setShowBtn(totalPages !== page && respons.length > 0);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <>
      <div>
        <SearchBar onSearch={searchImagesl} />
        {error && <Error />}
        {images.length > 0 && (
          <Images images={images} onImageClick={openModal} />
        )}
        {loader && <Loader />}
        <Toaster position="top-right" />
        {showBtn && !loader && <MoreBtn onClick={handleMore} />}

        <ModalWindow
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={imege}
        />
      </div>
    </>
  );
}

export default App;
