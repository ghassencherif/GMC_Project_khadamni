import React, { useEffect, useState } from "react";
import CarouselS from './Carousel/Carousel';
import ListAnnonce from './ListAnnonce';
import { useSelector, useDispatch } from "react-redux";
import { getAnnonce} from "../JS/actions/actionAnnonce";
import Category from './Category/Category';





function Home() {
  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();
  
  const getAllAnnonce = () => {
    dispatch(getAnnonce());
  };
  useEffect(() => {
    getAllAnnonce();
  }, []);


  return (
          <div>
                    <CarouselS />
                    <Category />
                    <ListAnnonce  annonce={annonces} />
          </div>

  );
}

export default Home;
