import {
  ADD_TO_MY_CONTENT,
  REMOVE_FROM_MY_CONTENT,
} from "../actions/actionTypes";

const initialState = {
  myList: [],
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MY_CONTENT:
      const myList = [...state.myList];
      const searchForExisting = myList.filter(
        (v) => v.imdbID === action.payload.imdbID
      );
      if (searchForExisting && searchForExisting.length === 0) {
        myList.push(action.payload);
      }
      return { ...state, myList };
    case REMOVE_FROM_MY_CONTENT:
      const list = [...state.myList].filter(
        (v) => v.imdbID !== action.payload.imdbID
      );
      return { ...state, myList: list };
    default:
      return state;
  }
};

export default content;
