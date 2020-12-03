import React, { useEffect } from "react";
import CarouselS from './Carousel/Carousel';
import ListAnnonce from './ListAnnonce';
import { useSelector, useDispatch } from "react-redux";
import { getAnnonces} from "../JS/actions/actionAnnonce";
import Category from './Category/Category';



function Home() {

  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();
  
  const getAllAnnonce = () => {
    dispatch(getAnnonces());
  };
  useEffect(() => {
    getAllAnnonce();
  }, []);

  return (
    
          <div>
                    <CarouselS />
                    <Category />
                    <ListAnnonce annonce={annonces} />
                    
          </div>

  );
}

export default Home;
