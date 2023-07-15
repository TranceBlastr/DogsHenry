import axios from "axios";
import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENT,
} from "./actionTypes";

export function GetAllDogs() {
  return async function (dispatch) {
    const response = await axios.get("https://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: response,
    });
  };
}
export function GetDogsById(id) {
  return async function (dispatch) {
    const response = await axios.get(`https://localhost:3001/dogs/${id}`);
    return {
      type: GET_DOG_BY_ID,
      payload: response,
    };
  };
}
export function GetDogByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://localhost:3001/dogs?name=${name}`
    );
    return {
      type: GET_DOG_BY_NAME,
      payload: response,
    };
  };
}
export function GetTemperament() {
  return async function (dispatch) {
    const response = await axios.get(`https://localhost:3001/temperament`);
    return {
      type: GET_TEMPERAMENT,
      payload: response,
    };
  };
}
