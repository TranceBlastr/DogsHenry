import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENT,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_ORIGIN,
  FILTER_BY_WEIGHT,
  ORDER,
} from "./actionTypes";

const initialState = {
  allDogs: [],
  allDogsAux: [],
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
        allDogsAux: action.payload,
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
        allDogs: action.payload,
      };

    case FILTER_BY_TEMPERAMENT:
      if (action.payload !== "") {
        const filteredDogs = state.allDogsAux.filter((dog) => {
          const temperaments = dog.temperament.split(", ");
          return temperaments.includes(action.payload);
        });
        return {
          ...state,
          allDogs: filteredDogs,
        };
      } else
        return {
          ...state,
          allDogs: state.allDogsAux,
        };

    case FILTER_BY_ORIGIN:
      const { payload } = action;
      if (payload === "all") {
        // Si el valor es "all", se muestra el listado completo sin filtrar
        return {
          ...state,
          allDogs: state.allDogsAux,
        };
      } else {
        // Filtrar por el valor de createdInDb
        const filteredDogs = state.allDogsAux.filter((dog) =>
          payload === "api" ? !dog.createdInDb : dog.createdInDb
        );
        return {
          ...state,
          allDogs: filteredDogs,
        };
      }

    case FILTER_BY_WEIGHT:
      return {
        ...state,
        allDogs: "filteredDogs",
      };

    case ORDER:
      const sortedDogs = state.allDogs.slice().sort(function (a, b) {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "desc") {
          return b.name.localeCompare(a.name);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allDogs: sortedDogs,
      };

    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
