import {
  READ_SOURCES,
  SOURCE_ERROR,
  CLEAR_SOURCES,
  START_SOURCES_RELOAD,
  FINISHED_SOURCES_RELOAD,
} from "../types/sources";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const startSourcesReload = () => (dispatch) => {
  dispatch({ type: START_SOURCES_RELOAD });
};

export const finishedSourcesReload = () => (dispatch) => {
  dispatch({ type: FINISHED_SOURCES_RELOAD });
};

export const readSources = () =>
  readItemsAsync({
    url: "http://localhost:5000/sources",
    successType: READ_SOURCES,
    errorType: SOURCE_ERROR,
    startReload: startSourcesReload,
    finishedReload: finishedSourcesReload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearSource = () => (dispatch) => {
  dispatch({ type: CLEAR_SOURCES });
};
