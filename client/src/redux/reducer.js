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
  filteredDogs: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        allDogsAux: action.payload,
        filteredDogs: action.payload,
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
          filteredDogs: filteredDogs,
        };
      } else
        return {
          ...state,
          allDogs: state.allDogsAux,
        };

    case FILTER_BY_ORIGIN:
      if (action.payload === "all") {
        return {
          ...state,
          allDogs: state.filteredDogs,
        };
      } else {
        const filteredByOrigin = state.filteredDogs.filter((dog) =>
          action.payload === "api" ? !dog.createdInDb : dog.createdInDb
        );
        return {
          ...state,
          allDogs: filteredByOrigin,
        };
      }

    case ORDER:
      if (action.payload === "sel") {
        return {
          ...state,
        };
      }
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
        filteredDogs: sortedDogs,
      };

    case FILTER_BY_WEIGHT:
      if (action.payload === "sel") {
        return { ...state, allDogs: state.allDogsAux };
      }

      const sortedDogsByWeight = state.filteredDogs.slice().sort((a, b) => {
        const aWeight = a.weight.split(" - ")[0];
        const bWeight = b.weight.split(" - ")[0];

        // Comparar cuando ambos tienen números
        if (!isNaN(aWeight) && !isNaN(bWeight)) {
          return action.payload === "asc"
            ? aWeight - bWeight
            : bWeight - aWeight;
        }

        // Colocar "NaN" al final en el ordenamiento
        if (isNaN(aWeight) && isNaN(bWeight)) {
          return action.payload === "asc" ? 1 : -1;
        }

        // Colocar "NaN" al final y números al inicio
        return isNaN(aWeight) ? 1 : -1;
      });

      return {
        ...state,
        allDogs: sortedDogsByWeight,
        filteredDogs: sortedDogsByWeight,
      };

    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
