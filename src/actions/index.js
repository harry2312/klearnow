import { searchMoviesApi } from "../api";
import {
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  ADD_TO_MY_WATCHED,
  ADD_TO_MY_CONTENT,
  REMOVE_FROM_MY_CONTENT,
} from "./actionTypes";

export function searchMovie(dispatch, name, year, page) {
  dispatch({ type: SEARCH_PENDING });
  searchMoviesApi(name, year, page).then((res) => {
    if (res && res.status < 350 && res.data && res.data.Response == "True") {
      if (res.data.totalResults) {
        dispatch({ type: SEARCH_SUCCESS, payload: res.data });
      } else {
        dispatch({
          type: SEARCH_ERROR,
          message: "No result found for search",
        });
      }
    } else {
      dispatch({
        type: SEARCH_ERROR,
        message: "Something went wrong",
      });
    }
  });
}

export function addToMyContent(dispatch, item) {
  dispatch({ type: ADD_TO_MY_CONTENT, payload: item });
}

export function addToWatched(dispatch, item) {
  dispatch({ type: ADD_TO_MY_WATCHED, payload: item });
}

export function removeFromMyContent(dispatch, item) {
  dispatch({ type: REMOVE_FROM_MY_CONTENT, payload: item });
}