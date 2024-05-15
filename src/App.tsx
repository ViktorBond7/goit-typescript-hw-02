import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import searchImages from "./components/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImagesGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import MoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ModalWindow from "./components/ImageModal/ImageModal";
import Error from "./components/ErrorMessage/ErrorMessage";

export type AppProps = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };

  alt_description: string;
  user: {
    name: string;
  };
};

function App() {
  const [images, setImages] = useState<AppProps[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imege, setImage] = useState<AppProps | null>(null);

  const openModal = (imageUrl: AppProps): void => {
    setImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setImage(null);
  };

  const searchImagesl = (newQuery: string): void => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async (): Promise<void> => {
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
          <ImagesGallery images={images} onImageClick={openModal} />
        )}
        {loader && <Loader />}
        <Toaster position="top-right" />
        {showBtn && !loader && <MoreBtn onClick={handleMore} />}

        {imege && (
          <ModalWindow
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            image={imege}
          />
        )}
      </div>
    </>
  );
}

export default App;
