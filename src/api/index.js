import axios from "axios";
import { apiUrl } from "../../config";

export function searchMoviesApi(title, year, page) {
  return axios
    .get(
      `${apiUrl}${title ? "&s=" + title : ""}${year ? "&y=" + year : ""}${
        page ? "&page=" + page : ""
      }`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res)
    .catch((err) => err.response);
}
