import React, { useEffect, useState } from "react";
import CarouselS from "./Carousel/Carousel";
import ListAnnonce from "./ListAnnonce";
import { useSelector, useDispatch } from "react-redux";
import { getAnnonce } from "../JS/actions/actionAnnonce";
import SearchBar from "./Header/SearchBar";
import Footer from "../Components/Footer/Footer";

function Home() {
  const [searchAnnonce, setSearchAnnonce] = useState("");
  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();

  const getAllAnnonce = () => {
    dispatch(getAnnonce());
  };
  useEffect(() => {
    getAllAnnonce();
  }, []);

  const handleInput = (e) => {
    setSearchAnnonce(e.target.value);
  };

  return (
    <div>
      <CarouselS />
      <SearchBar handleInput={handleInput} />
      <ListAnnonce
        annonce={annonces.filter(
          (ads) =>
            ads.category.typeCat
              .toLowerCase()
              .includes(searchAnnonce.toLowerCase().trim()) ||
            ads.title
              .toLowerCase()
              .includes(searchAnnonce.toLowerCase().trim()) ||
            ads.description
              .toLowerCase()
              .includes(searchAnnonce.toLowerCase().trim())
        )}
      />
      <Footer />
    </div>
  );
}

export default Home;
