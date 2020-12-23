import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "../Home/Home";
import Login from "../User/Sign In/Login";
import Signup from "../User/Sign Up/Signup";
import ChooseUser from "../Choose User/ChooseUser";
import Profile from "../User/Profile/ProfileUser";
import AnnonceDetail from "../Annonce/Annonce Details/AnnonceDetail";
import { getAnnonces } from "../../JS/actions/actionAnnonce";
import AddAnnonce from "../Annonce/Add Annonce/AddAnnonce";
import EdditModal from "../User/Edit User/EdditModal";
import EditAnnonce from "../Annonce/Edit Annonce/EditAnnonce";

function Pages() {
  const annonces = useSelector((state) => state.annonceReducer.annonces);
  const dispatch = useDispatch();

  dispatch(getAnnonces());

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={Login} />
      <Route path="/chooseuser" exact component={ChooseUser} />
      <Route path="/chooseuser/signup/:client" exact component={Signup} />
      <Route path="/ProfileUser/:_id/addannonce" exact component={AddAnnonce} />
      <Route path="/ProfileUser/" exact component={Profile} />
      <Route path="/ProfileUser/edit/user/:_id" exact component={EdditModal} />
      <Route
        path="/ProfileUser/edit-annonce/:_id"
        exact
        component={EditAnnonce}
      />
      <Route
        path="/annoncedetails/:title"
        exact
        render={(props) => <AnnonceDetail annonce={annonces} {...props} />}
      />
    </Switch>
  );
}

export default Pages;
