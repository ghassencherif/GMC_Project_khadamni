
import { GET_CATEGORIES} from "../constants/actionTypes";

const intialState = {
  categories: [],
 
};

 const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };


    default:
      return state;
  }
};

export default categoryReducer;