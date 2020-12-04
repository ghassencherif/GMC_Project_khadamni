import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ChooseUser from './ChooseUser';
import Profile from './ProfileUser';
import AnnonceDetail from './AnnonceDetail'
import { getAnnonces} from "../JS/actions/actionAnnonce";

function Pages() {

  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();
  
  
    dispatch(getAnnonces());
  
    
    
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/chooseuser' exact component={ChooseUser} />
            <Route path='/chooseuser/signup' exact component={Signup} />
            <Route path='/ProfileUser' exact component={Profile}/>
            <Route path='/annoncedetails/:title' exact render={(props) => <AnnonceDetail annonce={annonces} {...props} />} />
        </Switch>
    )
}

export default Pages
