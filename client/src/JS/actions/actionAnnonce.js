import axios from "axios";
import { GET_ANNONCES, GET_ANNONCE } from "../constants/actionTypes";

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


export const deleteAnnonce = (id) => (dispatch) => {
  axios
    .delete(`/annonce/delete/${id}`)
    .then((res) => dispatch(getAnnonces()))
    .catch((err) => console.log(err));
};


export const editAnnonce = (id, editAnnonce) => (dispatch) => {
  axios
    .put(`/annonce/update/${id}`, editAnnonce)
    .then((res) => dispatch(getAnnonce(id)))
    .catch((err) => console.log(err));
};