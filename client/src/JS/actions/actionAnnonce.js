import axios from "axios";
import {
  GET_ANNONCES, GET_ANNONCE
} from "../constants/actionTypes";

export const getAnnonces = () => (dispatch) => {
  axios
    .get("/annonce")
    .then((res) => dispatch({ type: GET_ANNONCES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getAnnonce = (id) => (dispatch) => {
  axios
    .get(`/annonce/${id}`)
    .then((res) => dispatch({ type: GET_ANNONCE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addAnnonce= (newAnnonce) => (dispatch) => {
  axios
    .post("/annonce/addannonce", newAnnonce)
    .then((res) => dispatch(getAnnonces()))
    .catch((err) => console.log(err));
};
