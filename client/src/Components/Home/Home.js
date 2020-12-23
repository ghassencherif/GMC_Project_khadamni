import React, { useEffect, useState } from "react";
import CarouselS from "../Home/Carousel/Carousel";
import ListAnnonce from "../Annonce/List Annonce/ListAnnonce";
import { useSelector, useDispatch } from "react-redux";
import { getAnnonce } from "../../JS/actions/actionAnnonce";
import SearchBar from "../Home/Header/SearchBar";
import Footer from "../Home/Footer/Footer";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchSelect, setSearchSelect] = useState("");
  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();

  const getAllAnnonce = () => {
    dispatch(getAnnonce());
  };
  useEffect(() => {
    getAllAnnonce();
  }, []);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelect = (e) => {
    setSearchSelect(e.target.value);
  };

  return (
    <div>
      <CarouselS />
      <SearchBar handleInput={handleInput} handleSelect={handleSelect} />
      <ListAnnonce
        annonce={annonces.filter(
          (ads) =>
            ads.title
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim()) ||
            ads.description
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim())
        )}
        annonce={annonces.filter((ads) =>
          ads.category.typeCat.includes(searchSelect)
        )}
      />
      <Footer />
    </div>
  );
}

export default Home;
