import { GET_ANNONCES, GET_ANNONCE } from "../constants/actionTypes";

const intialState = {
  annonces: [],
  list: {
    title: "",
    description: "",
    address: "",
    phoneNumber: "",
  },
};

const annonceReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ANNONCES:
      return { ...state, annonces: action.payload };
    case GET_ANNONCE:
      return { ...state, list: action.payload[0] };

    default:
      return state;
  }
};

export default annonceReducer;
