import axios from "axios";
import {
  GET_CATEGORIES
} from "../constants/actionTypes";

export const getCategory = () => (dispatch) => {
  axios
    .get("/category")
    .then((res) => dispatch({ type: GET_CATEGORIES, payload: res.data }))
    .catch((err) => console.log(err));
};

