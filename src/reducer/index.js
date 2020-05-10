import { combineReducers } from "redux";
import search from "./search";
import content from "./content.js";
import watched from "./watched";

const reducer = combineReducers({ search, content, watched });

export default reducer;
