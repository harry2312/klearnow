import { ADD_TO_MY_WATCHED } from "../actions/actionTypes";

const watched = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_MY_WATCHED:
      const myList = [...state];
      const searchForExisting = myList.filter(
        (v) => v.imdbID === action.payload.imdbID
      );
      if (searchForExisting && searchForExisting.length === 0) {
        myList.push(action.payload);
      }
      return [...myList];
    default:
      return state;
  }
};

export default watched;
