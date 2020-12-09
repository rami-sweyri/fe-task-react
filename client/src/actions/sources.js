import { READ_SOURCES, SOURCE_ERROR, CLEAR_SOURCES } from "../types/sources";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const readSources = () =>
  readItemsAsync({
    url: "http://localhost:5000/sources",
    successType: READ_SOURCES,
    errorType: SOURCE_ERROR,
    noReload: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearSource = () => (dispatch) => {
  dispatch({ type: CLEAR_SOURCES });
};
