import React, { useEffect } from "react";
import './App.css';
import CarouselS from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import ListAnnonce from './Components/ListAnnonce';
import { useSelector, useDispatch } from "react-redux";
import { getAnnonces} from "./JS/actions/actionAnnonce";

import Footer from './Components/Footer/Footer'
import Category from './Components/Category/Category';


function App() {

  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();
  
  const getAllAnnonce = () => {
    dispatch(getAnnonces());
  };
  useEffect(() => {
    getAllAnnonce();
  }, []);

  return (
    
          <div className="App">
                    <Header />
                    <CarouselS />
                    <Category />
                    <ListAnnonce annonce={annonces} />

                    <Footer />


          </div>
   
  );
}

export default App;
