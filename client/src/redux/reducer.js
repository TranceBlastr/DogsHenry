import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENT,
} from "./actionTypes";

const initialState = {
  allDogs: [],
  allDogsCopy: [],
  temperament: [],
  dogName: [],
  detail: {},
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        allDogsCopy: action.payload,
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperament: action.payload,
      };

    case GET_DOG_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogName: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
