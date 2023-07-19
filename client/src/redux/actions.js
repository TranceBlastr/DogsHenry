import axios from "axios";
import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENT,
} from "./actionTypes";

export function getAllDogs() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: response.data,
    });
  };
}
export function getDogsById(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: GET_DOG_BY_ID,
      payload: response.data,
    });
  };
}
export function getDogByName(name) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: GET_DOG_BY_NAME,
      payload: response,
    });
  };
}
export function getTemperament() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: GET_TEMPERAMENT,
      payload: response.data,
    });
  };
}

export const postDog = (form) => {
  return async function () {
    try {
      const response = await axios.post("http://localhost:3001/dogs", form);
      alert(response.data);
    } catch (error) {
      alert(error);
    }
  };
};
